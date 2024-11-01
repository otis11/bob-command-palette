/* This file is generated by **scripts/generate-code.ts**. Do not modify by hand.  */
import { browserName } from "./platform";
export const PLUGIN_LIST = [
	{
		id: "tabs",
		permissions: ["tabs"],
		prefix: "t",
		name: "Tabs",
		description: "Search browser tabs.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/tabs.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tab</title><path d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z" /></svg>',
	},
	{
		id: "session-devices",
		permissions: ["sessions"],
		prefix: "sd",
		name: "Session Devices",
		description: "Search your session devices.",
		supportedBrowsers: ["chrome", "chromium", "edg"],
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/session-devices.js",
	},
	{
		id: "prefixes",
		prefix: "?",
		name: "Prefixes",
		description: "Filter for a specific ResultGroup only.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/prefixes.js",
	},
	{
		id: "tab-groups",
		permissions: ["tabGroups"],
		prefix: "tg",
		name: "Tab Groups",
		description: "List tab groups.",
		supportedBrowsers: ["chrome", "chromium", "edg"],
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/tab-groups.js",
	},
	{
		id: "google",
		prefix: "g",
		name: "Google",
		description: "Google search & Google filters like intitle:youtube.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/google.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>google</title><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>',
	},
	{
		id: "focus-active-input",
		name: "Focus Input",
		providesTheme: false,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/focus-active-input.js",
	},
	{
		id: "management",
		permissions: ["management"],
		prefix: "e",
		name: "Management",
		description: "Search & interact with installed extensions.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/management.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>puzzle-outline</title><path d="M22,13.5C22,15.26 20.7,16.72 19,16.96V20A2,2 0 0,1 17,22H13.2V21.7A2.7,2.7 0 0,0 10.5,19C9,19 7.8,20.21 7.8,21.7V22H4A2,2 0 0,1 2,20V16.2H2.3C3.79,16.2 5,15 5,13.5C5,12 3.79,10.8 2.3,10.8H2V7A2,2 0 0,1 4,5H7.04C7.28,3.3 8.74,2 10.5,2C12.26,2 13.72,3.3 13.96,5H17A2,2 0 0,1 19,7V10.04C20.7,10.28 22,11.74 22,13.5M17,15H18.5A1.5,1.5 0 0,0 20,13.5A1.5,1.5 0 0,0 18.5,12H17V7H12V5.5A1.5,1.5 0 0,0 10.5,4A1.5,1.5 0 0,0 9,5.5V7H4V9.12C5.76,9.8 7,11.5 7,13.5C7,15.5 5.75,17.2 4,17.88V20H6.12C6.8,18.25 8.5,17 10.5,17C12.5,17 14.2,18.25 14.88,20H17V15Z" /></svg>',
	},
	{
		id: "on-blur-close-window",
		name: "On blur close bob window",
		providesTheme: false,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/on-blur-close-window.js",
	},
	{
		id: "bob-dark-theme",
		name: "Bob dark theme",
		providesTheme: true,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/bob-dark-theme.js",
		icon: '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" transform="matrix(-1 0 0 1 17 0)" fill="#FFDA58"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 8.5144 4.03833)" fill="white" stroke="black"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 16.0798 4.03833)" fill="white" stroke="black"/></svg>',
	},
	{
		id: "content-settings",
		permissions: ["contentSettings"],
		prefix: "cs",
		name: "Content Settings",
		description:
			"Settings that control whether websites can use features such as cookies, JavaScript, and plugins",
		supportedBrowsers: ["chrome", "chromium", "edg"],
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/content-settings.js",
	},
	{
		id: "sessions",
		permissions: ["sessions"],
		prefix: "s",
		name: "Sessions",
		description: "List your recently closed sessions.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/sessions.js",
	},
	{
		id: "bookmarks",
		permissions: ["bookmarks"],
		prefix: "b",
		name: "Bookmarks",
		description: "Search & interact with bookmarks.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/bookmarks.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bookmark</title><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',
	},
	{
		id: "system-storage",
		permissions: ["system.storage"],
		prefix: "sto",
		name: "System Storage",
		description: "Information about your system storage.",
		supportedBrowsers: ["chromium", "chrome", "edg"],
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/system-storage.js",
	},
	{
		id: "window",
		prefix: "win",
		name: "Window",
		description:
			"Interact with chrome windows, for instance 'close other windows'",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/window.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-restore</title><path d="M4,8H8V4H20V16H16V20H4V8M16,8V14H18V6H10V8H16M6,12V18H14V12H6Z" /></svg>',
	},
	{
		id: "history",
		permissions: ["history"],
		prefix: "h",
		name: "History",
		description: "Search & interact with browser history.",
		providesTheme: false,
		providesResults: true,
		providesConfig: true,
		file: "/plugins/history.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>history</title><path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" /></svg>',
	},
	{
		id: "shortcuts",
		prefix: "sc",
		name: "Shortcuts",
		description: "Search for browser shortcuts.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/shortcuts.js",
	},
	{
		id: "tab-and-group-actions",
		permissions: ["tabs", "tabGroups"],
		prefix: "tga",
		name: "Tab Group Actions",
		description:
			"Combined actions for tabs & groups, for instance group tabs by domain",
		supportedBrowsers: ["chrome", "chromium", "edg"],
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/tab-and-group-actions.js",
	},
	{
		id: "bob-light-theme",
		name: "Bob light theme",
		providesTheme: true,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/bob-light-theme.js",
		icon: '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" transform="matrix(-1 0 0 1 17 0)" fill="#FFDA58"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 8.5144 4.03833)" fill="white" stroke="black"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 16.0798 4.03833)" fill="white" stroke="black"/></svg>',
	},
	{
		id: "bob-results",
		prefix: "bob",
		name: "Bob",
		description:
			"Internal Bob commands like open settings, reset settings ...",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/bob-results.js",
		icon: '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" transform="matrix(-1 0 0 1 17 0)" fill="#FFDA58"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 8.5144 4.03833)" fill="white" stroke="black"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 16.0798 4.03833)" fill="white" stroke="black"/></svg>',
	},
	{
		id: "commands",
		prefix: "c",
		name: "Commands",
		description: "Available commands from extensions.",
		supportedBrowsers: ["chrome", "chromium", "edg"],
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/commands.js",
	},
	{
		id: "clear-search-on-focus",
		name: "Clear search on window focus",
		providesTheme: false,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/clear-search-on-focus.js",
	},
	{
		id: "chatgpt",
		prefix: "gpt",
		name: "ChatGPT",
		description: "Start a chat with chatgpt",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/chatgpt.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>brain</title><path d="M21.33,12.91C21.42,14.46 20.71,15.95 19.44,16.86L20.21,18.35C20.44,18.8 20.47,19.33 20.27,19.8C20.08,20.27 19.69,20.64 19.21,20.8L18.42,21.05C18.25,21.11 18.06,21.14 17.88,21.14C17.37,21.14 16.89,20.91 16.56,20.5L14.44,18C13.55,17.85 12.71,17.47 12,16.9C11.5,17.05 11,17.13 10.5,17.13C9.62,17.13 8.74,16.86 8,16.34C7.47,16.5 6.93,16.57 6.38,16.56C5.59,16.57 4.81,16.41 4.08,16.11C2.65,15.47 1.7,14.07 1.65,12.5C1.57,11.78 1.69,11.05 2,10.39C1.71,9.64 1.68,8.82 1.93,8.06C2.3,7.11 3,6.32 3.87,5.82C4.45,4.13 6.08,3 7.87,3.12C9.47,1.62 11.92,1.46 13.7,2.75C14.12,2.64 14.56,2.58 15,2.58C16.36,2.55 17.65,3.15 18.5,4.22C20.54,4.75 22,6.57 22.08,8.69C22.13,9.8 21.83,10.89 21.22,11.82C21.29,12.18 21.33,12.54 21.33,12.91M16.33,11.5C16.9,11.57 17.35,12 17.35,12.57A1,1 0 0,1 16.35,13.57H15.72C15.4,14.47 14.84,15.26 14.1,15.86C14.35,15.95 14.61,16 14.87,16.07C20,16 19.4,12.87 19.4,12.82C19.34,11.39 18.14,10.27 16.71,10.33A1,1 0 0,1 15.71,9.33A1,1 0 0,1 16.71,8.33C17.94,8.36 19.12,8.82 20.04,9.63C20.09,9.34 20.12,9.04 20.12,8.74C20.06,7.5 19.5,6.42 17.25,6.21C16,3.25 12.85,4.89 12.85,5.81V5.81C12.82,6.04 13.06,6.53 13.1,6.56A1,1 0 0,1 14.1,7.56C14.1,8.11 13.65,8.56 13.1,8.56V8.56C12.57,8.54 12.07,8.34 11.67,8C11.19,8.31 10.64,8.5 10.07,8.56V8.56C9.5,8.61 9.03,8.21 9,7.66C8.92,7.1 9.33,6.61 9.88,6.56C10.04,6.54 10.82,6.42 10.82,5.79V5.79C10.82,5.13 11.07,4.5 11.5,4C10.58,3.75 9.59,4.08 8.59,5.29C6.75,5 6,5.25 5.45,7.2C4.5,7.67 4,8 3.78,9C4.86,8.78 5.97,8.87 7,9.25C7.5,9.44 7.78,10 7.59,10.54C7.4,11.06 6.82,11.32 6.3,11.13C5.57,10.81 4.75,10.79 4,11.07C3.68,11.34 3.68,11.9 3.68,12.34C3.68,13.08 4.05,13.77 4.68,14.17C5.21,14.44 5.8,14.58 6.39,14.57C6.24,14.31 6.11,14.04 6,13.76C5.81,13.22 6.1,12.63 6.64,12.44C7.18,12.25 7.77,12.54 7.96,13.08C8.36,14.22 9.38,15 10.58,15.13C11.95,15.06 13.17,14.25 13.77,13C14,11.62 15.11,11.5 16.33,11.5M18.33,18.97L17.71,17.67L17,17.83L18,19.08L18.33,18.97M13.68,10.36C13.7,9.83 13.3,9.38 12.77,9.33C12.06,9.29 11.37,9.53 10.84,10C10.27,10.58 9.97,11.38 10,12.19A1,1 0 0,0 11,13.19C11.57,13.19 12,12.74 12,12.19C12,11.92 12.07,11.65 12.23,11.43C12.35,11.33 12.5,11.28 12.66,11.28C13.21,11.31 13.68,10.9 13.68,10.36Z" /></svg>',
	},
	{
		id: "top-sites",
		permissions: ["topSites"],
		prefix: "top",
		name: "Top Sites",
		description:
			"The top sites (i.e. most visited sites) that are displayed on the new tab page",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/top-sites.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-up-bold</title><path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" /></svg>',
	},
	{
		id: "system-cpu",
		permissions: ["system.cpu"],
		prefix: "cpu",
		name: "System CPU",
		description: "Information about your system CPU.",
		supportedBrowsers: ["chromium", "chrome", "edg"],
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/system-cpu.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cpu-64-bit</title><path d="M9,3V5H7A2,2 0 0,0 5,7V9H3V11H5V13H3V15H5V17A2,2 0 0,0 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11H21V9H19V7A2,2 0 0,0 17,5H15V3H13V5H11V3M8,9H11.5V10.5H8.5V11.25H10.5A1,1 0 0,1 11.5,12.25V14A1,1 0 0,1 10.5,15H8A1,1 0 0,1 7,14V10A1,1 0 0,1 8,9M12.5,9H14V11H15.5V9H17V15H15.5V12.5H12.5M8.5,12.75V13.5H10V12.75" /></svg>',
	},
	{
		id: "downloads",
		permissions: ["downloads"],
		prefix: "d",
		name: "Downloads",
		description: "List and manage downloads.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/downloads.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>download</title><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>',
	},
	{
		id: "system-memory",
		permissions: ["system.memory"],
		prefix: "mem",
		name: "System Memory",
		description: "Information about your system memory.",
		supportedBrowsers: ["chromium", "chrome", "edg"],
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/system-memory.js",
	},
	{
		id: "google-new",
		prefix: "gn",
		name: "Google New",
		description: "Create new google docs, sheets, slides ...",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/google-new.js",
	},
	{
		id: "tab-actions",
		permissions: ["tabs"],
		prefix: "a",
		name: "Tab Actions",
		description: "Interact with browser tabs. Sort, merge, duplicate...",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/tab-actions.js",
	},
] as BobPluginMeta[];
export const PLUGIN_LIST_SUPPORTED = (() => {
	return PLUGIN_LIST.filter((plugin) => {
		return plugin.supportedBrowsers
			? plugin.supportedBrowsers?.includes(browserName)
			: true;
	});
})();

export const PLUGIN_LIST_THEMES = (() => {
	return PLUGIN_LIST_SUPPORTED.filter((plugin) => {
		return plugin.providesTheme;
	});
})();

export const PLUGIN_LIST_RESULTS = (() => {
	return PLUGIN_LIST_SUPPORTED.filter((plugin) => {
		return plugin.providesResults;
	});
})();

export const PLUGIN_LIST_CONFIGS = (() => {
	return PLUGIN_LIST_SUPPORTED.filter((plugin) => {
		return plugin.providesConfig;
	});
})();

export type BobPluginMeta = {
	id: string;
	name: string;
	file: string;
	prefix?: string;
	permissions?: string[];
	hostPermissions?: string[];
	description?: string;
	supportedBrowsers?: string[];
	providesTheme: boolean;
	providesResults: boolean;
	providesConfig: boolean;
	icon?: string;
};