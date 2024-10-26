import { isChromium } from "../../platform";

export function renderHeader() {
	const header = document.createElement("header");

	const shortcutText = document.createElement("p");
	const shortcutLink = isChromium
		? "chrome://extensions/shortcuts"
		: "about:addons";
	const specificNotice = isChromium
		? "Setting it to <strong>Global</strong> makes the shortcut system wide!"
		: 'Click the settings icon in the right corner. Choose "Manage Extension Shortcuts"';
	shortcutText.innerHTML = `Hi! Go to <strong>${shortcutLink}</strong> to set a shortcut to open Bob. ${specificNotice}`;
	header.append(shortcutText);
	document.body.append(header);
}