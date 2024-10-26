import { getConfig } from "./config";
import type { Dimensions } from "./theme";

console.log("bob.background.start");

let bobCurrentWindowId = -1;
let currentWindow: chrome.windows.Window;
let windowDimensions: Dimensions;

chrome.runtime.onInstalled.addListener(async (details) => {
	if (details.reason === "install") {
		chrome.runtime.openOptionsPage();
	}

	if (details.reason === "update") {
		// TODO on update show changelog? probably to annoying on each update
	}

	// TODO uninstall url?
	// chrome.runtime.setUninstallURL();
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log("bob.background.message.received", message, sender);
});

chrome.commands.onCommand.addListener((command) => {
	if (command === "bob.open") {
		openBob();
	}
});

chrome.action.onClicked.addListener(() => {
	chrome.runtime.openOptionsPage();
});

chrome.windows.onFocusChanged.addListener(async (windowId) => {
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
		(currentWindow.left || 0) +
		Math.floor(((currentWindow.width || 0) - windowDimensions.width) / 2);
	const top =
		(currentWindow.top || 0) +
		Math.floor(((currentWindow.height || 0) - windowDimensions.height) / 2);

	let newBobWindow = await chrome.windows.create({
		url: "views/search/index.html",
		type: "popup",
		width: windowDimensions.width,
		height: windowDimensions.height,
		left: left,
		top: top,
		focused: true,
	});

	// failed to open bob window with dimensions set from config?
	if (!newBobWindow) {
		newBobWindow = await chrome.windows.create({
			url: "views/search/index.html",
			type: "popup",
			width: currentWindow.width,
			height: currentWindow.height,
			left: currentWindow.left,
			top: currentWindow.top,
			focused: true,
		});
	}

	bobCurrentWindowId = newBobWindow.id || -1;

	await chrome.storage.sync.set({
		lastFocusedWindowId: currentWindow.id,
	});
}
