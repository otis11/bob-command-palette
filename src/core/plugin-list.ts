/* This file is generated by **scripts/generate-plugins.ts**. Do not modify by hand.  */
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
		canBeDisabled: true,
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
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>devices</title><path d="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z" /></svg>',
		canBeDisabled: true,
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
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-double-right</title><path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" /></svg>',
		canBeDisabled: true,
	},
	{
		id: "bookmark-actions",
		permissions: ["bookmarks", "tabs"],
		prefix: "ba",
		name: "Bookmark actions",
		description: "For instance create a bookmark for the current tab.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/bookmark-actions.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bookmark</title><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',
		canBeDisabled: true,
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
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>group</title><path d="M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14" /></svg>',
		canBeDisabled: true,
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
		canBeDisabled: true,
	},
	{
		id: "focus-active-input",
		name: "Focus active search field",
		description:
			"When opening/switching to the bob command palette, focus the active search field to directly type into it.",
		providesTheme: false,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/focus-active-input.js",
		canBeDisabled: true,
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
		canBeDisabled: true,
	},
	{
		id: "on-blur-close-window",
		name: "On bob leave close window",
		description:
			"When leaving the bob command palette, for instance focusing another window, fully close the command palette window.",
		providesTheme: false,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/on-blur-close-window.js",
		canBeDisabled: true,
	},
	{
		id: "bob-dark-theme",
		name: "Bob dark theme",
		providesTheme: true,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/bob-dark-theme.js",
		icon: '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" transform="matrix(-1 0 0 1 17 0)" fill="#FFDA58"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 8.5144 4.03833)" fill="white" stroke="black"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 16.0798 4.03833)" fill="white" stroke="black"/></svg>',
		canBeDisabled: false,
	},
	{
		id: "youtube",
		prefix: "yt",
		name: "Youtube",
		description:
			"Youtube search and Youtube shortcuts, for instance Youtube History.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/youtube.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>youtube</title><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>',
		canBeDisabled: true,
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
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>wrench-cog</title><path d="M19.94 17.94C19.96 17.79 19.97 17.65 19.97 17.5S19.96 17.2 19.94 17.05L20.91 16.32C21 16.25 21.03 16.13 20.97 16.03L20.05 14.47C20 14.37 19.86 14.33 19.76 14.37L18.61 14.82C18.37 14.65 18.12 14.5 17.83 14.38L17.66 13.19C17.64 13.08 17.54 13 17.43 13H15.58C15.46 13 15.36 13.08 15.34 13.19L15.17 14.38C14.88 14.5 14.63 14.65 14.39 14.82L13.24 14.37C13.14 14.33 13 14.37 12.96 14.47L12.03 16.03C11.97 16.13 12 16.25 12.09 16.32L13.06 17.05C13.05 17.2 13.03 17.35 13.03 17.5S13.05 17.79 13.06 17.94L12.09 18.68C12 18.75 11.97 18.87 12.03 18.97L12.96 20.53C13 20.63 13.14 20.66 13.24 20.63L14.39 20.17C14.63 20.35 14.88 20.5 15.17 20.62L15.34 21.81C15.36 21.92 15.46 22 15.58 22H17.43C17.54 22 17.64 21.92 17.66 21.81L17.83 20.62C18.12 20.5 18.37 20.35 18.61 20.17L19.76 20.63C19.86 20.66 20 20.63 20.05 20.53L20.97 18.97C21.03 18.87 21 18.75 20.91 18.68L19.94 17.94M16.5 19C15.67 19 15 18.33 15 17.5S15.67 16 16.5 16 18 16.67 18 17.5 17.33 19 16.5 19M9 2C10.8 2.6 12 4.3 12 6.2C12 8.2 10.8 9.9 9 10.5V21.5C9 21.8 8.8 22 8.5 22H6.5C6.2 22 6 21.8 6 21.4V10.4C4.2 9.8 3 8.1 3 6.2S4.2 2.6 6 2V5.7H9V2Z" /></svg>',
		canBeDisabled: true,
	},
	{
		id: "browser",
		prefix: "cfg",
		name: "Browser Settings",
		supportedBrowsers: ["chrome", "chromium", "edg"],
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/browser.js",
		canBeDisabled: true,
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
		canBeDisabled: true,
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
		canBeDisabled: true,
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
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>nas</title><path d="M4,5C2.89,5 2,5.89 2,7V17C2,18.11 2.89,19 4,19H20C21.11,19 22,18.11 22,17V7C22,5.89 21.11,5 20,5H4M4.5,7A1,1 0 0,1 5.5,8A1,1 0 0,1 4.5,9A1,1 0 0,1 3.5,8A1,1 0 0,1 4.5,7M7,7H20V17H7V7M8,8V16H11V8H8M12,8V16H15V8H12M16,8V16H19V8H16M9,9H10V10H9V9M13,9H14V10H13V9M17,9H18V10H17V9Z" /></svg>',
		canBeDisabled: true,
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
		canBeDisabled: true,
	},
	{
		id: "browsing-data",
		permissions: ["browsingData", "tabs"],
		name: "Browsing Data",
		description: "Manage your browsing data.",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/browsing-data.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',
		canBeDisabled: true,
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
		canBeDisabled: true,
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
		canBeDisabled: true,
	},
	{
		id: "bob-light-theme",
		name: "Bob light theme",
		providesTheme: true,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/bob-light-theme.js",
		icon: '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" transform="matrix(-1 0 0 1 17 0)" fill="#FFDA58"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 8.5144 4.03833)" fill="white" stroke="black"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 16.0798 4.03833)" fill="white" stroke="black"/></svg>',
		canBeDisabled: true,
	},
	{
		id: "tab-cookies",
		permissions: ["tabs", "cookies"],
		hostPermissions: ["https://*/*", "http://*/*"],
		prefix: "tc",
		name: "Tab Cookies",
		description: "List all cookies of a tab or clear all cookies of a tab",
		providesTheme: false,
		providesResults: true,
		providesConfig: false,
		file: "/plugins/tab-cookies.js",
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cookie-minus-outline</title><path d="M15 10H14.5C13.67 10 13 9.33 13 8.5V8H12.5C11.67 8 11 7.33 11 6.5V5.07C7.91 5.5 5.47 8 5.07 11.08C5.25 10.46 5.82 10 6.5 10C7.33 10 8 10.67 8 11.5S7.33 13 6.5 13C5.71 13 5.07 12.39 5 11.62C5 12.11 5 12.61 5.09 13.12C5.5 15.81 7.54 18.04 10.16 18.74C9.76 18.47 9.5 18 9.5 17.5C9.5 16.67 10.17 16 11 16S12.5 16.67 12.5 17.5C12.5 18.22 12 18.82 11.32 18.96C11.9 19 12.46 19 13 18.92C13 18.95 13 18.97 13 19C13 19.66 13.12 20.3 13.32 20.89C12.89 20.96 12.45 21 12 21C7.03 21 3 16.97 3 12S7.03 3 12 3C12 3 13 3 13 4V6H14C14 6 15 6 15 7V8H17C17 8 18 8 18 9V10H20C20 10 20.6 10 20.87 10.5C20.96 11 21 11.5 21 12C21 12.45 20.96 12.89 20.89 13.32C20.3 13.12 19.66 13 19 13C18.97 13 18.95 13 18.92 13C18.97 12.68 19 12.34 19 12H17.5C16.67 12 16 11.33 16 10.5V10H15M15 14.5C15 14.5 15 14.5 15 14.53C15.66 13.95 16.45 13.5 17.32 13.24C17.08 13.09 16.8 13 16.5 13C15.67 13 15 13.67 15 14.5M11 7.5C11 6.67 10.33 6 9.5 6S8 6.67 8 7.5 8.67 9 9.5 9 11 8.33 11 7.5M11.5 14C12.33 14 13 13.33 13 12.5S12.33 11 11.5 11 10 11.67 10 12.5 10.67 14 11.5 14M15 18V20H23V18H15Z" /></svg>',
		canBeDisabled: true,
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
		canBeDisabled: true,
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
		canBeDisabled: true,
	},
	{
		id: "clear-search-on-focus",
		name: "Clear search on window focus",
		description: "Clears the search field when focusing/opening bob.",
		providesTheme: false,
		providesResults: false,
		providesConfig: false,
		file: "/plugins/clear-search-on-focus.js",
		canBeDisabled: true,
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
		canBeDisabled: true,
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
		canBeDisabled: true,
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
		canBeDisabled: true,
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
		canBeDisabled: true,
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
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cpu-64-bit</title><path d="M9,3V5H7A2,2 0 0,0 5,7V9H3V11H5V13H3V15H5V17A2,2 0 0,0 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11H21V9H19V7A2,2 0 0,0 17,5H15V3H13V5H11V3M8,9H11.5V10.5H8.5V11.25H10.5A1,1 0 0,1 11.5,12.25V14A1,1 0 0,1 10.5,15H8A1,1 0 0,1 7,14V10A1,1 0 0,1 8,9M12.5,9H14V11H15.5V9H17V15H15.5V12.5H12.5M8.5,12.75V13.5H10V12.75" /></svg>',
		canBeDisabled: true,
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
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>google</title><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>',
		canBeDisabled: true,
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
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>gesture-tap-button</title><path d="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z" /></svg>',
		canBeDisabled: true,
	},
] as BobPluginMeta[];
export const PLUGIN_LIST_SUPPORTED = (() => {
	return PLUGIN_LIST.filter((plugin) => {
		return plugin.supportedBrowsers
			? plugin.supportedBrowsers?.includes(browserName)
			: true;
	});
})();

export type BobPluginMeta = {
	id: string;
	name: string;
	file: string;
	prefix?: string;
	permissions?: chrome.runtime.ManifestPermissions[];
	hostPermissions?: string[];
	description?: string;
	supportedBrowsers?: string[];
	providesTheme: boolean;
	providesResults: boolean;
	providesConfig: boolean;
	icon?: string;
	canBeDisabled: boolean;
};
