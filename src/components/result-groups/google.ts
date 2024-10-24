import { iconFromString, iconGoogle } from "../../icons";
import { ResultGroup } from "../result-group";
import { Result } from "../result/result";
import type { Search } from "../search";

export class ResultGroupGoogle extends ResultGroup {
	prefix = "g";
	description = "Google search & Google filters like intitle:youtube.";

	public getResults(): Promise<Result[]> {
		return new Promise((resolve) => {
			resolve([
				new ResultGoogle(
					"intitle",
					'intitle:"Youtube". Searches for pages with a specific keyword in the title',
				),
				new ResultGoogle(
					"inurl",
					"inurl:python. Searches for URLs containing a specific keyword",
				),
				new ResultGoogle(
					"filetype",
					"filetype:pdf. Searches for specific file types",
				),
				new ResultGoogle(
					"site",
					"site:github.com. Limits search to a specific website.",
				),
				new ResultGoogle(
					"intext",
					'intext:"Hello World".  Searches for pages with a specific keyword in the page content.',
				),
				new ResultGoogle(
					"before/after",
					"before:2000-01-01 after:2001-01-01. Searches for a specific date range.",
				),
				new ResultGoogle(
					"|",
					"site:facebook.com | site:twitter.com. Searches for a OR b.",
				),
				new ResultGoogle(
					"&",
					"site:facebook.com & site:twitter.com. Searches for a AND b.",
				),
				new ResultGoogle(
					"&",
					"site:facebook.com & site:twitter.com. Searches for a AND b.",
				),
				new ResultGoogle("-", "-site:facebook.com. Exclude results."),
				new ResultGoogleSearch(),
			]);
		});
	}
}

export class ResultGoogle extends Result {
	public id(): string {
		return this.name() + this.title;
	}

	constructor(title: string, description: string) {
		super({
			title,
			description,
			prepend: iconFromString(iconGoogle),
		});
	}

	async execute(search: Search): Promise<void> {
		chrome.tabs.create({
			url: `https://google.com/search?q=${search.text.replaceAll("g", "").trim().replaceAll(" ", "+")}`,
		});
		window.close();
	}
}

export class ResultGoogleSearch extends Result {
	shouldAlwaysRender?: boolean | undefined = true;
	public id(): string {
		return this.name() + this.title;
	}

	constructor() {
		super({
			title: "Google",
			description: "Search google",
			prepend: iconFromString(iconGoogle),
		});
	}

	async execute(search: Search): Promise<void> {
		chrome.tabs.create({
			url: `https://google.com/search?q=${search.text.replaceAll("g", "").trim().replaceAll(" ", "+")}`,
		});
		window.close();
	}
}