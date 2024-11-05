import { focusLastActiveWindow } from "../../util/last-active-window.ts";
import type { Tag } from "../tags/tags.ts";
import { Result } from "./result.ts";

export function NewResult(config: SimpleResultConfig) {
	return new SimpleResult(config);
}

export function NewUrlResult(config: NewUrlConfig) {
	return new SimpleResult({
		...config,
		run: async () => {
			await chrome.tabs.create({ url: config.url });
			await focusLastActiveWindow();
		},
	});
}

type NewUrlConfig = {
	title: string;
	url: string;
	description?: string;
	tags?: Tag[];
	prepend?: HTMLElement;
	append?: HTMLElement;
};

type SimpleResultConfig = {
	title: string;
	description?: string;
	tags?: Tag[];
	prepend?: HTMLElement;
	append?: HTMLElement;
	run?: () => Promise<void>;
};

export class SimpleResult extends Result {
	description(): string {
		return this.config.description || "";
	}

	title(): string {
		return this.config.title;
	}

	tags(): Tag[] {
		return this.config.tags || [];
	}

	prepend(): HTMLElement | undefined {
		return this.config.prepend;
	}

	append(): HTMLElement | undefined {
		return this.config.append;
	}

	constructor(private config: SimpleResultConfig) {
		super();
	}

	id(): string {
		return this.className() + this.title();
	}

	async run(): Promise<void> {
		await this.config.run?.();
	}
}