import type { BobConfig } from "../../config";
import type { BobPluginMeta } from "../../plugin-list";
import { disablePlugin, enablePlugin } from "../../plugins";
import { type Tag, Tags } from "../tags/tags";
import "./plugin-card.css";

export function PluginCard(plugin: BobPluginMeta, config: BobConfig) {
	const container = document.createElement("div");
	container.classList.add("result-plugin-card");

	const label = document.createElement("label");
	label.classList.add("result-plugin-title");

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = !!config.pluginsEnabled[plugin.id];
	checkbox.addEventListener("change", async () => {
		if (checkbox.checked) {
			enablePlugin(plugin);
		} else {
			disablePlugin(plugin);
		}
	});
	const labelText = document.createElement("span");
	labelText.innerText = plugin.name;
	label.append(checkbox, labelText);
	const description = document.createElement("div");
	description.classList.add("result-plugin-description");
	description.innerText = plugin.description || "";
	container.append(label);

	const tags: Tag[] = [];
	if (plugin.providesTheme) {
		tags.push({ text: "Theme" });
	}
	if (plugin.providesResults) {
		tags.push({ text: "Results" });
	}

	const tag = Tags(tags);
	container.append(tag);

	container.append(description);

	return container;
}
