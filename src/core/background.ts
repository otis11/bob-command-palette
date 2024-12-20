import { getConfig } from "./config";
import type { Dimensions } from "./theme";

let bobCurrentWindowId = -1;
let currentWindow: chrome.windows.Window | undefined;
let windowDimensions: Dimensions | undefined;

chrome.runtime.onInstalled.addListener(async (details) => {
	if (details.reason === "install") {
		await chrome.tabs.create({ url: "/src/core/views/welcome/index.html" });
	}

	if (details.reason === "update") {
		// on update
	}

	// set uninstall url
	// chrome.runtime.setUninstallURL();
});

chrome.commands.onCommand.addListener(async (command) => {
	if (command === "bob.open") {
		await openBob();
	}
});

chrome.action.onClicked.addListener(async () => {
	await chrome.runtime.openOptionsPage();
});

chrome.windows.getCurrent().then((w) => {
	currentWindow = w;
});
chrome.windows.onFocusChanged.addListener(async () => {
	currentWindow = await chrome.windows.getCurrent();
});

chrome.windows.onRemoved.addListener((windowId) => {
	if (windowId === bobCurrentWindowId) {
		bobCurrentWindowId = -1;
	}
});

async function openBob() {
	if (bobCurrentWindowId > 0) {
		await chrome.windows.update(bobCurrentWindowId, {
			focused: true,
		});
		return;
	}

	if (!windowDimensions) {
		windowDimensions = (await getConfig()).dimensions;
	}

	const left =
		(currentWindow?.left || 0) +
		Math.floor(((currentWindow?.width || 0) - windowDimensions.width) / 2);
	const top =
		(currentWindow?.top || 0) +
		Math.floor(
			((currentWindow?.height || 0) - windowDimensions.height) / 2,
		);
	let newBobWindow: chrome.windows.Window;
	try {
		newBobWindow = await chrome.windows.create({
			url: "/src/core/views/search/index.html",
			type: "popup",
			width: windowDimensions.width,
			height: windowDimensions.height,
			left: left,
			top: top,
			focused: true,
		});
	} catch {
		if (chrome.runtime.lastError) {
			console.error("could not open bob window");
		}
		newBobWindow = await chrome.windows.create({
			url: "/src/core/views/search/index.html",
			type: "popup",
			width: currentWindow?.width || 600,
			height: currentWindow?.height || 400,
			left: currentWindow?.left || 0,
			top: currentWindow?.top || 0,
			focused: true,
		});
	}

	bobCurrentWindowId = newBobWindow.id || -1;

	await chrome.storage.sync.set({
		lastFocusedWindowId: currentWindow?.id,
	});
}
