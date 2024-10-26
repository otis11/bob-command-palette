import {
	iconArrowVerticalSplit,
	iconFromString,
	iconMusic,
	iconMusicOff,
	iconPin,
	iconPinOff,
	iconSortAlphabetically,
	iconTabPlus,
	iconTabRemove,
	iconWindowRestore,
} from "../../icons";
import { getLastActiveTab } from "../../util/last-active-tab";
import {
	getLastActiveWindow,
	getLastActiveWindowTabs,
	refocusLastActiveWindow,
} from "../../util/last-active-window";
import { ResultGroup } from "../result-group";
import { Result } from "../result/result";
import type { Search } from "../search";
import { ResultTab } from "./tabs";

export class ResultGroupTabActions extends ResultGroup {
	permissions = ["tabs"];
	prefix = "a";
	description = "Interact with browser tabs. Sort, merge, duplicate...";

	public async getResults(): Promise<Result[]> {
		return [
			new ResultCloseOtherTabs(),
			new ResultSortTabsByUrl(),
			new ResultTabDuplicate(),
			new ResultTabMute(),
			new ResultTabUnmute(),
			new ResultTabPin(),
			new ResultTabUnpin(),
			new ResultMergeWindows(),
			new ResultCloseBySearch(),
			new ResultSplitIntoWindows(),
		];
	}
}

class ResultTabDuplicate extends Result {
	constructor() {
		super({
			title: "Duplicate Tab",
			description: "",
			prepend: iconFromString(iconTabPlus),
		});
	}

	async execute(search: Search): Promise<void> {
		const lastActive = await getLastActiveTab();
		if (lastActive?.id) {
			await chrome.tabs.duplicate(lastActive.id);
			refocusLastActiveWindow();
		}
	}
}

class ResultTabMute extends Result {
	constructor() {
		super({
			title: "Mute Tab",
			description: "",
			prepend: iconFromString(iconMusicOff),
		});
	}

	async execute(search: Search): Promise<void> {
		const lastActive = await getLastActiveTab();
		if (lastActive?.id) {
			await chrome.tabs.update(lastActive.id, { muted: true });
			refocusLastActiveWindow();
		}
	}
}

class ResultTabUnmute extends Result {
	constructor() {
		super({
			title: "Unmute Tab",
			description: "",
			prepend: iconFromString(iconMusic),
		});
	}

	async execute(search: Search): Promise<void> {
		const lastActive = await getLastActiveTab();
		if (lastActive?.id) {
			await chrome.tabs.update(lastActive.id, { muted: false });
			refocusLastActiveWindow();
		}
	}
}

class ResultTabPin extends Result {
	constructor() {
		super({
			title: "Pin Tab",
			description: "",
			prepend: iconFromString(iconPin),
		});
	}

	async execute(search: Search): Promise<void> {
		const lastActive = await getLastActiveTab();
		if (lastActive?.id) {
			await chrome.tabs.update(lastActive.id, { pinned: true });
			refocusLastActiveWindow();
		}
	}
}

class ResultTabUnpin extends Result {
	constructor() {
		super({
			title: "Unpin Tab",
			description: "",
			prepend: iconFromString(iconPinOff),
		});
	}

	async execute(search: Search): Promise<void> {
		const lastActive = await getLastActiveTab();
		if (lastActive?.id) {
			await chrome.tabs.update(lastActive.id, { pinned: false });
			refocusLastActiveWindow();
		}
	}
}

export class ResultSortTabsByUrl extends Result {
	constructor() {
		super({
			title: "Sort tabs by url",
			description: "",
			prepend: iconFromString(iconSortAlphabetically),
		});
	}
	async execute(): Promise<void> {
		const tabs = await getLastActiveWindowTabs();

		const tabsSortedByUrl = tabs.sort((a, b) => {
			if (!a.url || !b.url) {
				// TODO use name instead of url?
				return 0;
			}
			if (a.url > b.url) {
				return 1;
			}
			if (a.url < b.url) {
				return -1;
			}
			return 0;
		});

		let isSortingNeeded = false;
		for (const [index, _] of tabsSortedByUrl.entries()) {
			// t1 t2 t3
			// t3 t2 t1
			// t1 t2 t3
			if (tabsSortedByUrl[index].index !== index) {
				isSortingNeeded = true;
				break;
			}
		}

		if (!isSortingNeeded) {
			// TODO replace with notifcation or sonner
			alert("already ordered");
			return;
		}

		for (const [index, tab] of tabsSortedByUrl.entries()) {
			if (tab.id) {
				chrome.tabs.move(tab.id, { index });
			}
		}
		refocusLastActiveWindow();
	}
}

export class ResultMergeWindows extends Result {
	constructor() {
		super({
			title: "Merge windows",
			description: "",
			prepend: iconFromString(iconWindowRestore),
		});
	}
	async execute(): Promise<void> {
		const lastWindow = await getLastActiveWindow();
		const tabs = await chrome.tabs.query({});
		const tabsNotInLastWindow = tabs
			.filter((tab) => tab.windowId !== lastWindow.id)
			.map((w) => w.id || -1);
		await chrome.tabs.move(tabsNotInLastWindow, {
			windowId: lastWindow.id,
			index: 999,
		});
		refocusLastActiveWindow();
	}
}

export class ResultSplitIntoWindows extends Result {
	constructor() {
		super({
			title: "Split tabs into windows",
			description: "",
			prepend: iconFromString(iconArrowVerticalSplit),
		});
	}

	async execute(): Promise<void> {
		const tabs = await getLastActiveWindowTabs();
		const promises = [];
		for (const tab of tabs) {
			promises.push(chrome.windows.create({ tabId: tab.id }));
		}
		await Promise.all(promises);
		refocusLastActiveWindow();
	}
}

export class ResultCloseOtherTabs extends Result {
	constructor() {
		super({
			title: "Close other tabs",
			description: "",
			prepend: iconFromString(iconTabRemove),
		});
	}

	async execute(): Promise<void> {
		const tabs = await getLastActiveWindowTabs();
		const lastActiveTab = await getLastActiveTab();
		const promises = [];
		for (const tab of tabs) {
			if (tab.id && tab.id !== lastActiveTab?.id) {
				promises.push(chrome.tabs.remove(tab.id));
			}
		}
		await Promise.all(promises);
		refocusLastActiveWindow();
	}
}

export class ResultCloseBySearch extends Result {
	constructor() {
		super({
			options: new ResultOptionsCloseBySearch(),
			title: "Close tabs by search",
			description:
				"Close the following tabs by search. Select any tab to close them.",
			prepend: iconFromString(iconTabRemove),
		});
	}

	async execute(search: Search): Promise<void> {
		this.emitShowOptionsEvent();
	}
}

class ResultOptionsCloseBySearch extends ResultGroup {
	public async getResults(): Promise<Result[]> {
		const tabs = await chrome.tabs.query({});
		return tabs.map((tab) => new ResultTabCloseBySearch(tab));
	}
}

class ResultTabCloseBySearch extends ResultTab {
	async execute(search: Search, results: Result[]): Promise<void> {
		const currentWindow = await chrome.windows.getCurrent();
		for (const result of results) {
			if (
				result instanceof ResultTab &&
				result.tab.id &&
				result.tab.windowId !== currentWindow.id
			) {
				await chrome.tabs.remove(result.tab.id);
			}
		}
		refocusLastActiveWindow();
	}
}
