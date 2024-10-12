import { SearchGroups } from ".";
import type { Search } from "../components/search";
import { SearchGroup } from "../components/search-group";
import { SearchResult } from "../components/search-result";
import { iconBob, iconFromString } from "../icons";
import { setThemeToDefaults } from "../themes";

export class SearchGroupBob extends SearchGroup {
	constructor() {
		super({
			name: "bob",
			permissions: [],
		});
	}

	public getResults(): Promise<SearchResult[]> {
		return new Promise((resolve) => {
			resolve([
				new SearchResultBobOpenSettings(),
				new SearchResultBobResetSettings(),
			]);
		});
	}

	public shouldRenderAlone(search: Search): boolean {
		return false;
	}
}

export class SearchResultBobOpenSettings extends SearchResult {
	constructor() {
		super({
			title: "Bob Options",
			searchText: "bob settings options change",
			description: "Change me here!",
			prepend: iconFromString(iconBob),
		});
	}
	onSelect(): void {
		chrome.runtime.openOptionsPage();
		window.close();
	}
}

export class SearchResultBobResetSettings extends SearchResult {
	constructor() {
		super({
			title: "Bob Reset Settings",
			searchText: "bob settings options reset",
			description: "Reset my settings to default",
			prepend: iconFromString(iconBob),
		});
	}
	async onSelect(): Promise<void> {
		await setThemeToDefaults();
		await SearchGroups.setConfigToDefaults();
		window.close();
	}
}
