import type { Result } from "../../components/result/result";
import { Search } from "../../components/search";
import type { BobConfig } from "../../config";

export function sortResults(
	results: Result[],
	search: Search,
	config: BobConfig,
) {
	return results.sort((a, b) => {
		const aa = a.search(search);
		const bb = b.search(search);
		// title
		if (aa.title.score > bb.title.score) {
			return -1;
		}
		if (aa.title.score < bb.title.score) {
			return 1;
		}
		// dont sort after description, just showing the matches in description is enough. recents is more important
		// same title score, use description
		// if (aa.description.score > bb.description.score) {
		// 	return -1;
		// }
		// if (aa.description.score < bb.description.score) {
		// 	return 1;
		// }
		// by recent usage
		const aL = config.resultsUsage[a.id()]?.l || 0;
		const bL = config.resultsUsage[b.id()]?.l || 0;
		if (aL > bL) {
			return -1;
		}
		if (aL < bL) {
			return 1;
		}

		return 0;
	});
}

export function searchResults(
	results: Result[],
	search: Search,
	config: BobConfig,
) {
	const filtered = results.filter((result) => {
		const r = result.search(search);
		return search.textLower.length
			? r.title.score > 0 || r.description.score > 0
			: true;
	});
	return sortResults(filtered, search, config);
}

export function newSearch(input: HTMLInputElement, text?: string) {
	return new Search({
		inputElement: input,
		text: typeof text === "string" ? text : input.value || "",
		selectionStart: input.selectionStart,
	});
}
