import { getConfig } from "../../config";
import { getUsage } from "../../usage";
import { unixTimeToHumanReadable } from "../../util/time";
import "../../global.css";
import "./main.css";
import { coreI18n } from "../../locales";
import { loadPlugins } from "../../plugins";
import { loadTheme } from "../../theme";

async function renderUsage() {
	const config = await getConfig();
	await loadPlugins();
	await loadTheme();
	coreI18n.setLocale(config.locale);
	const usage = await getUsage();

	const resultKeys = Object.keys(usage.results).sort((keyA, keyB) => {
		const lA = usage.results[keyA]?.l || 0;
		const lB = usage.results[keyB]?.l || 0;
		if (lA > lB) {
			return -1;
		}
		if (lA < lB) {
			return 1;
		}
		return 0;
	});

	const header = ResultUsageRow(
		"Name",
		coreI18n.t("Count"),
		coreI18n.t("Last used"),
	);
	header.style.fontWeight = "bold";
	document.body.append(header);
	for (const key of resultKeys) {
		document.body.append(
			ResultUsageRow(
				usage.results[key]?.t || key,
				(usage.results[key]?.c || 0).toString(),
				usage.results[key]?.l
					? unixTimeToHumanReadable(usage.results[key]?.l)
					: "",
			),
		);
	}
}

function ResultUsageRow(
	nameText: string,
	countText: string,
	lastUsedText: string,
) {
	const container = document.createElement("div");
	container.classList.add("result-usage");

	const lastUsed = document.createElement("div");
	lastUsed.classList.add("result-usage-last");
	lastUsed.innerText = lastUsedText;

	const name = document.createElement("div");
	name.classList.add("result-usage-name");
	name.innerText = nameText;

	const count = document.createElement("div");
	count.classList.add("result-usage-count");
	count.innerText = countText;

	container.append(name, count, lastUsed);
	return container;
}
(async () => {
	await renderUsage();
})();
