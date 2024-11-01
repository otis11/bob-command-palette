import { type BobWindowState, defineBobPlugin } from "../../core/BobPlugin";
import { Result } from "../../core/components/result/result";
import { iconFilter, iconFromString } from "../../core/icons";
import { NewLocales } from "../../core/locales/new-locales";
import { PLUGINS_LOADED } from "../../core/plugins";
import enUS from "./locales/en-US";

const { t, setLocale } = NewLocales({
	"en-US": enUS,
});

export default defineBobPlugin({
	prefix: "?",
	description() {
		return t("Prefixes.description");
	},

	name() {
		return t("Prefixes");
	},

	async provideResults(): Promise<Result[]> {
		const groups = PLUGINS_LOADED;
		const results = [];
		for (const group of groups) {
			if (group.prefix) {
				results.push(
					new Prefix(
						group.prefix,
						`Filter for ${group.name()} [${group.id}]`,
					),
				);
			}
		}
		return results;
	},
});

export class Prefix extends Result {
	title(): string {
		return this.titleText;
	}

	description(): string {
		return this.descriptionText;
	}

	prepend(): HTMLElement | undefined {
		return iconFromString(iconFilter);
	}
	constructor(
		private titleText: string,
		private descriptionText: string,
	) {
		super();
	}

	public id(): string {
		return this.name() + this.title();
	}

	async execute(state: BobWindowState): Promise<void> {
		if (state.currentSearch.inputElement) {
			state.currentSearch.inputElement.value = this.title();
			state.currentSearch.inputElement.scrollIntoView();
			state.currentSearch.inputElement.focus();
		}
	}
}