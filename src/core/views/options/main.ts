import { loadTheme } from "../../theme";
import "../../theme";
import "../../global.css";
import "./main.css";
import { Checkbox } from "../../components/checkbox";
import { FlexContainer } from "../../components/flex-container";
import { GroupHeading } from "../../components/group-heading";
import { NumberInput } from "../../components/number-input";
import { Select } from "../../components/select";
import { type BobConfig, getConfig, updateConfig } from "../../config";
import { LOCALES, type Locale, setLocale } from "../../locales";
import { PLUGINS_LOADED, loadPlugins } from "../../plugins";
import { renderBobDimensions } from "./dimensions";
import { renderFooter } from "./footer";
import { renderHeader } from "./header";
import { renderPlugins } from "./plugins";

(async () => {
	await loadPlugins();
	await loadTheme();
	const config = await getConfig();
	setLocale(config.locale);
	renderHeader();
	await renderPlugins(config);
	renderSearchOptions(config);
	await renderBobDimensions(config);

	const container = FlexContainer({ gap: "20px" });
	const locales = Select(
		LOCALES.map((locale) => ({
			title: locale,
			value: locale,
			selected: locale === config.locale,
		})),
	);
	const themes = Select(
		PLUGINS_LOADED.filter((loaded) => !!loaded.provideTheme).map(
			(plugin) => ({
				title: plugin.name(),
				value: plugin.id || "",
				selected: plugin.id === config.theme,
			}),
		),
	);

	locales.addEventListener("change", () => {
		updateConfig({
			locale: locales.value as Locale,
		});
	});

	themes.addEventListener("change", () => {
		updateConfig({
			theme: themes.value as Locale,
		});
	});
	container.append(locales, themes);
	document.body.append(container);

	renderPluginOptions(config);

	renderFooter();
})();

function renderSearchOptions(config: BobConfig) {
	const container = FlexContainer({ flexDirection: "column" });
	container.append(GroupHeading("Search Options"));

	const [labelWidth, inputMaxRenderedItems] = NumberInput({
		value: config.search?.maxRenderedItems?.toString() || "",
		label: "maxRenderedItems",
		description:
			"Max items that will be rendered in the bob command palette. Recommend to keep low, as more items increases the rendering time.",
	});

	inputMaxRenderedItems.addEventListener("input", () => {
		updateConfig({
			search: {
				maxRenderedItems: Number.parseInt(inputMaxRenderedItems.value),
			},
		});
	});

	container.append(labelWidth);
	document.body.append(container);
}

function renderPluginOptions(config: BobConfig) {
	const container = document.createElement("div");
	for (const plugin of PLUGINS_LOADED) {
		const pluginConfig = plugin.provideConfig?.();
		if (pluginConfig) {
			for (const key of Object.keys(pluginConfig)) {
				const obj = pluginConfig[key];
				if (typeof obj.value === "boolean") {
					const [checkbox] = Checkbox(
						obj.value,
						false,
						obj.description,
					);
					container.append(checkbox);
				} else if (typeof obj.value === "number") {
					const [label, input] = NumberInput({
						value: obj.value.toString(),
						description: obj.description,
						label: key,
					});
					container.append(label);
				}
			}
		}
	}
	document.body.append(container);
}
