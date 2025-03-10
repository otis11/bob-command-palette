import { type BobWindowState, defineBobPlugin } from "../../core/BobPlugin";
import { Result } from "../../core/components/result/result";
import type { Tag } from "../../core/components/tags/tags";
import { getConfig } from "../../core/config";
import { faviconFromUrl, iconFromString, iconHistory } from "../../core/icons";
import type { Locale } from "../../core/locales";
import { NewLocales } from "../../core/locales/new-locales";
import { focusLastActiveWindow } from "../../core/util/last-active-window";
import enUS from "./locales/en-US";

const { t, setLocale } = NewLocales({ "en-US": enUS });

export default defineBobPlugin({
	icon: iconHistory,
	permissions: ["history"],
	prefix: "h",
	name() {
		return t("History");
	},
	provideConfig() {
		return {
			maxResults: {
				type: "number",
				value: 100,
				description: "Max history results",
			},
		};
	},
	onLocalChange(locale: Locale) {
		setLocale(locale);
	},
	async provideResults(): Promise<Result[]> {
		const config = await getConfig();
		const items = await chrome.history.search({
			text: "",
			maxResults:
				Number.parseInt(
					config.pluginsConfig[
						this.id || ""
					]?.maxResults.value?.toString() || "100",
				) || 100,
		});
		return items.map((item) => new HistoryItem(item));
	},
	description() {
		return t("History.description");
	},
});

export class HistoryItem extends Result {
	description(): string {
		return this.item.url || "";
	}

	title(): string {
		return this.item.title || "";
	}

	tags(): Tag[] {
		return [
			{
				html: iconFromString(iconHistory, "12px").outerHTML,
				type: "default",
			},
			{ text: `${this.item.visitCount} visits`, type: "default" },
		];
	}

	prepend(): HTMLElement | undefined {
		return this.item.url ? faviconFromUrl(this.item.url) : undefined;
	}

	options(): Result[] | undefined {
		return [new HistoryRemove(this.item)];
	}
	constructor(private item: chrome.history.HistoryItem) {
		super();
	}

	public id(): string {
		return this.className() + this.item.id;
	}

	async run(): Promise<void> {
		if (this.item.url) {
			await chrome.tabs.create({ url: this.item.url });
			await focusLastActiveWindow();
		} else {
			console.error("history has no url", this);
		}
	}
}

class HistoryRemove extends Result {
	title(): string {
		return t("HistoryRemove.title");
	}
	description(): string {
		return t("HistoryRemove.description");
	}
	constructor(private item: chrome.history.HistoryItem) {
		super();
	}

	public async run(state: BobWindowState): Promise<void> {
		if (this.item.url) {
			await chrome.history.deleteUrl({ url: this.item.url });
			state.closeResultOptions();
			await focusLastActiveWindow();
		}
	}
}
