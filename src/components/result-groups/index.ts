import { getConfig, updateConfig } from "../../config";
import { browserName, isChromium } from "../../platform";
import type { ResultGroup } from "../result-group";
import { ResultGroupBob } from "./bob";
import { ResultGroupBookmarks } from "./bookmarks";
import { ResultGroupCommands } from "./commands";
import { ResultGroupContentSettings } from "./content-settings";
import { ResultGroupGoogle } from "./google";
import { ResultGroupHistory } from "./history";
import { ResultGroupManagement } from "./management";
import { ResultGroupPrefixes } from "./prefixes";
import { ResultGroupSessionDevices } from "./sessions.devices";
import { ResultGroupShortcuts } from "./shortcuts";
import { ResultGroupSystemCpu } from "./system-cpu";
import { ResultGroupSystemMemory } from "./system-memory";
import { ResultGroupSystemStorage } from "./system-storage";
import { ResultGroupTabs } from "./tabs";
import { ResultGroupTabsActions } from "./tabs-actions";
import { ResultGroupTopSites } from "./top-sites";
import { ResultGroupWindow } from "./window";

export const RESULT_GROUPS = [
	new ResultGroupBookmarks(),
	new ResultGroupShortcuts(),
	new ResultGroupBob(),
	new ResultGroupHistory(),
	new ResultGroupTabs(),
	new ResultGroupGoogle(),
	new ResultGroupPrefixes(),
	new ResultGroupManagement(),
	new ResultGroupSessionDevices(),
	new ResultGroupSystemCpu(),
	new ResultGroupSystemMemory(),
	new ResultGroupSystemStorage(),
	new ResultGroupContentSettings(),
	new ResultGroupTopSites(),
	new ResultGroupCommands(),
	new ResultGroupTabsActions(),
	new ResultGroupWindow(),
];

export const RESULT_GROUPS_BROWSER_FILTERED = (() => {
	return RESULT_GROUPS.filter((group) => {
		return group.supportedBrowser.includes(browserName);
	});
})();

export async function getEnabledResultGroups() {
	const config = await getConfig();
	const groups = [];
	for (const group of RESULT_GROUPS_BROWSER_FILTERED) {
		if (config.groups[group.name]?.enabled) {
			groups.push(group);
		}
	}
	return groups;
}

export async function enableResultGroup(group: ResultGroup) {
	chrome.permissions.request(
		{
			permissions: group.permissions,
			origins: group.hostPermissions,
		},
		async (granted) => {
			if (!granted) {
				console.error("could not grant permission for group?", group);
			}
			await updateConfig({
				groups: {
					[group.name]: {
						enabled: true,
					},
				},
			});
		},
	);
}

export async function disableResultGroup(group: ResultGroup) {
	chrome.permissions.remove(
		{
			permissions: group.permissions,
			origins: group.hostPermissions,
		},
		async (removed) => {
			if (!removed) {
				console.error("could not remove permission for group?", group);
			}
			await updateConfig({
				groups: {
					[group.name]: {
						enabled: false,
					},
				},
			});
		},
	);
}