import { readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { $ } from "bun";
import type { BobPlugin } from "../src/core/BobPlugin";

globalThis.document = {
	// @ts-expect-error fake document so script doesnt crash
	createElement: () => ({
		classList: { add: () => {} },
		style: {},
		append: () => {},
	}),
};

const pluginFolders = readdirSync(resolve(__dirname, "../src/plugins"));
const plugins = [];
let pluginContent =
	'/* This file is generated by **scripts/generate-code.ts**. Do not modify by hand.  */\nimport { browserName } from "./platform"\n';
for (const pluginFolder of pluginFolders) {
	const plugin = await import(`../src/plugins/${pluginFolder}/index.ts`);
	const pluginInstance = plugin.default as BobPlugin;

	if (!pluginInstance) {
		console.error("Plugin instance not found for folder: ", pluginFolder);
		continue;
	}

	plugins.push({
		id: pluginFolder,
		permissions: pluginInstance.permissions,
		hostPermissions: pluginInstance.hostPermissions,
		prefix: pluginInstance.prefix,
		name: pluginInstance.name(),
		description: pluginInstance.description?.(),
		supportedBrowsers: pluginInstance.supportedBrowsers,
		providesTheme: !!pluginInstance.provideTheme,
		providesResults: !!pluginInstance.provideResults,
		providesConfig: !!pluginInstance.provideConfig,
		file: `/plugins/${pluginFolder}.js`,
	});
}

pluginContent += `export const PLUGIN_LIST = ${JSON.stringify(plugins)} as BobPluginMeta[]
export const PLUGIN_LIST_SUPPORTED = (() => {	
	return PLUGIN_LIST.filter((plugin) => {
	return plugin.supportedBrowsers
		? plugin.supportedBrowsers?.includes(browserName)
		: true;
	});
})()

export const PLUGIN_LIST_THEMES = (() => {	
	return PLUGIN_LIST_SUPPORTED.filter((plugin) => {
	return plugin.providesTheme;
	});
})()	

export const PLUGIN_LIST_RESULTS = (() => {	
	return PLUGIN_LIST_SUPPORTED.filter((plugin) => {
	return plugin.providesResults;
	});
})()

export const PLUGIN_LIST_CONFIGS = (() => {	
	return PLUGIN_LIST_SUPPORTED.filter((plugin) => {
	return plugin.providesConfig;
	});
})()
\n`;
pluginContent += `export type BobPluginMeta = { 
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
}`;
writeFileSync(resolve(__dirname, "../src/core/plugin-list.ts"), pluginContent);

await $`bun run lint`;
