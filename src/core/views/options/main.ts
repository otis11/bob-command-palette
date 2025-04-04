import { loadTheme } from "../../theme";
import "../../global.css";
import "./main.css";
import { Checkbox } from "../../components/checkbox";
import { FlexContainer } from "../../components/flex-container";
import { GroupHeading } from "../../components/group-heading";
import {
	CustomThemeLink,
	PluginsLink,
	WelcomeLink,
} from "../../components/internal-links";
import { NumberInput } from "../../components/number-input/number-input";
import { Select } from "../../components/select";
import { ShortcutInput } from "../../components/shortcut-input/shortcut-input";
import {
	type BobConfig,
	type KeybindingKey,
	getConfig,
	updateConfig,
} from "../../config";
import { LOCALES, type Locale, coreI18n } from "../../locales";
import { PLUGINS_LOADED, loadPlugins } from "../../plugins";
import { renderBobDimensions } from "./dimensions";
import { renderFooter } from "./footer";

(async () => {
	await loadPlugins();
	await loadTheme();
	const config = await getConfig();
	coreI18n.setLocale(config.locale);
	const container = FlexContainer({ gap: "24px" });
	container.append(PluginsLink(), WelcomeLink());
	document.body.append(container);
	renderLocale(config);
	renderTheme(config);
	renderOpenOptions(config);
	await renderBobDimensions(config);
	renderKeybindings(config);
	renderSearchOptions(config);
	renderPluginOptions(config);

	renderFooter();
})();

function renderTheme(config: BobConfig) {
	const container = FlexContainer({ gap: "24px", alignItems: "center" });

	const themes = Select([
		...PLUGINS_LOADED.filter((loaded) => !!loaded.provideTheme).map(
			(plugin) => ({
				title: plugin.name(),
				value: plugin.id || "",
				selected: plugin.id === config.theme,
			}),
		),
		{
			title: "Custom",
			value: "custom",
			selected: config.theme === "custom",
		},
	]);

	themes.addEventListener("change", async () => {
		await updateConfig({
			theme: themes.value as Locale,
		});
		window.location.reload();
	});

	container.append(themes, CustomThemeLink());
	document.body.append(GroupHeading("Theme"));
	document.body.append(container);
}

function renderLocale(config: BobConfig) {
	const container = FlexContainer({});

	const locales = Select(
		LOCALES.map((locale) => ({
			title: locale,
			value: locale,
			selected: locale === config.locale,
		})),
	);

	locales.addEventListener("change", async () => {
		await updateConfig({
			locale: locales.value as Locale,
		});
	});
	container.append(locales);
	document.body.append(GroupHeading("Locale"));
	document.body.append(container);
}

function renderSearchOptions(config: BobConfig) {
	const container = FlexContainer({ flexDirection: "column" });
	container.append(GroupHeading("Search Options"));

	const [labelWidth, inputMaxRenderedItems] = NumberInput({
		value: config.search?.maxRenderedItems?.toString() || "",
		label: "maxRenderedItems",
		description:
			"Max items that will be rendered in the bob command palette. Recommend to keep low, as more items increases the rendering time.",
	});

	inputMaxRenderedItems.addEventListener("input", async () => {
		await updateConfig({
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
	container.append(GroupHeading("Plugin Options"));
	for (const plugin of PLUGINS_LOADED) {
		const pluginConfig = plugin.provideConfig?.();
		if (pluginConfig) {
			for (const key of Object.keys(pluginConfig)) {
				const obj =
					config.pluginsConfig[plugin.id || ""]?.[key] ||
					pluginConfig[key];
				if (typeof obj.value === "boolean") {
					const [checkbox] = Checkbox(
						`${plugin.name()}: ${obj.value}`,
						false,
						obj.description,
					);
					container.append(checkbox);
				} else if (typeof obj.value === "number") {
					const [label, input] = NumberInput({
						value: obj.value.toString(),
						description: obj.description,
						label: `${plugin.name()}: ${key}`,
					});
					input.addEventListener("input", async () => {
						if (plugin.id) {
							await updateConfig({
								pluginsConfig: {
									[plugin.id]: {
										[key]: {
											value: Number.parseInt(input.value),
										},
									},
								},
							});
						}
					});
					container.append(label);
				}
			}
		}
	}
	document.body.append(container);
}

function renderKeybindings(config: BobConfig) {
	const keys = Object.keys(config.keybindings) as KeybindingKey[];
	const container = FlexContainer({ gap: "8px", flexDirection: "column" });
	container.append(GroupHeading("Keybindings"));

	for (const key of keys) {
		const [inputContainer, input, getKeys] = ShortcutInput(
			config.keybindings[key]?.keys || [],
		);
		input.addEventListener("blur", async () => {
			await updateConfig({
				keybindings: {
					[key]: {
						keys: getKeys(),
					},
				},
			});
		});
		const title = document.createElement("div");
		title.innerText = config.keybindings[key]?.title || "";
		title.style.fontSize = "1rem";
		title.style.lineHeight = "1";

		const description = document.createElement("div");
		description.innerText = config.keybindings[key]?.title || "";
		description.style.fontSize = "0.75rem";
		container.append(title, description, inputContainer);
	}

	document.body.append(container);
}

function renderOpenOptions(config: BobConfig) {
	const container = FlexContainer({ gap: "24px", alignItems: "center" });

	const openOptions = Select([
		{
			value: "popup",
			title: "Popup",
			selected: config.windowType === "popup",
		},
		{
			value: "normal",
			title: "Normal",
			selected: config.windowType === "normal",
		},
		{
			value: "panel",
			title: "Panel",
			selected: config.windowType === "panel",
		},
	]);

	openOptions.addEventListener("change", async () => {
		await updateConfig({
			windowType: openOptions.value as chrome.windows.createTypeEnum,
		});
		window.location.reload();
	});

	container.append(openOptions);
	document.body.append(GroupHeading("Open Options"));
	document.body.append(container);
}
