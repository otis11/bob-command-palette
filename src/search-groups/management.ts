import type { Search } from "../components/search";
import { SearchGroup } from "../components/search-group";
import { SearchResult } from "../components/search-result";
import { type Tag, Tags } from "../components/tags";
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
		const tags: Tag[] = [
			extension.enabled
				? { text: "enabled", type: "success" }
				: { text: "disabled", type: "error" },
			{ text: extension.installType, type: "default" },
		];

		super({
			title: extension.name,
			description: extension.description,
			prepend: icon,
			searchText: `${extension.name} ${extension.description}`,
			tags,
			options: new SearchGroupExtensionOptions(extension),
		});
	}

	onSelect(): void {
		console.log("on select system Memory");
	}
}

export class SearchGroupExtensionOptions extends SearchGroup {
	constructor(private extension: chrome.management.ExtensionInfo) {
		super({
			description: "extension options",
			name: "extension options",
		});
	}

	public async getResults(): Promise<SearchResult[]> {
		return [
			new SearchResultExtensionOptionsInfo(
				"Version",
				this.extension.version,
			),
			new SearchResultExtensionOptionsInfo("Id", this.extension.id),
			new SearchResultExtensionOptionsInfo(
				"Host Permissions",
				"Host permissions allow extensions to interact with the URL's matching patterns.",
				this.extension.hostPermissions.map((perm) => ({
					text: perm,
					type: "default",
				})),
			),
			new SearchResultExtensionOptionsInfo(
				"Permissions",
				"To access most extension APIs and features, you must declare permissions in your extension's manifest. Some permissions trigger warnings that users must allow to continue using the extension.",
				this.extension.permissions.map((perm) => ({
					text: perm,
					type: "default",
				})),
			),
			new SearchResultExtensionOptionsInfo(
				"Short name",
				this.extension.shortName,
			),
			new SearchResultExtensionOptionsInfo(
				"Offline enabled",
				"Is offline enabled?",
				[
					this.extension.offlineEnabled
						? { text: "yes", type: "success" }
						: { text: "no", type: "error" },
				],
			),
			new SearchResultExtensionOptionsInfo(
				"May disable",
				"Can be disabled by the user?",
				[
					this.extension.mayDisable
						? { text: "yes", type: "success" }
						: { text: "no", type: "error" },
				],
			),
		];
	}
}

export class SearchResultExtensionOptionsInfo extends SearchResult {
	constructor(title: string, description: string, tags?: Tag[]) {
		super({
			title,
			description,
			tags,
			searchText: `${title} ${description}`,
		});
	}

	onSelect(search: Search): void {}
}
