import { SearchGroup } from "../components/search-group";
import { SearchResult } from "../components/search-result";
import {
	faviconFromUrl,
	iconFromString,
	iconFromUrl,
	iconPuzzleOutline,
} from "../icons";

export class SearchGroupManagement extends SearchGroup {
	constructor() {
		super({
			name: "management",
			permissions: ["management"],
			filter: "!e",
			description: "Search & interact with installed extensions.",
		});
	}

	public async getResults(): Promise<SearchResult[]> {
		const extensions = await chrome.management.getAll();
		return extensions.map((extension) => {
			return new SearchResultExtension(extension);
		});
	}
}

export class SearchResultExtension extends SearchResult {
	constructor(extension: chrome.management.ExtensionInfo) {
		const iconUrl = extension.icons ? extension.icons[0].url : "";
		const icon = iconFromUrl(iconUrl, "");
		super({
			title: extension.name,
			description: extension.description,
			prepend: icon,
			append: iconFromString(iconPuzzleOutline),
			searchText: `${extension.name} ${extension.description}`,
		});
	}

	onSelect(): void {
		console.log("on select system Memory");
	}
}
