import { getEnabledResultGroups } from ".";
import { iconFilter, iconFromString } from "../../icons";
import { t } from "../../locale";
import { ResultGroup } from "../result-group";
import { Result } from "../result/result";
import type { Search } from "../search";

export class Prefixes extends ResultGroup {
	public id(): string {
		return "prefixes";
	}
	prefix = "?";
	public description(): string {
		return t("Prefixes.description");
	}

	public name(): string {
		return t("Prefixes");
	}

	public async getResults(): Promise<Result[]> {
		const groups = await getEnabledResultGroups();
		const results = [];
		for (const group of groups) {
			if (group.prefix) {
				results.push(
					new Prefix(
						group.prefix,
						`Filter for ${group.name()} [${group.id()}]`,
					),
				);
			}
		}
		return results;
	}
}

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

	async execute(search: Search): Promise<void> {
		if (search.inputElement) {
			search.inputElement.value = this.title();
			search.inputElement.scrollIntoView();
			search.inputElement.focus();
		}
	}
}
