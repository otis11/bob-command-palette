import type { BrowserName } from "../../platform";
import { ResultGroup } from "../result-group";
import { Result } from "../result/result";
import type { Search } from "../search";
import type { Tag } from "../tags/tags";

// separated from sessions because only chrome has .getDevices
export class SessionDevices extends ResultGroup {
	public id(): string {
		return "session-devices";
	}
	permissions = ["sessions"];
	public description(): string {
		return "Search your session devices.";
	}
	public name(): string {
		return "Session Devices";
	}
	supportedBrowsers: BrowserName[] = ["chrome", "chromium", "edg"];
	public prefix?: string | undefined = "sd";

	public async getResults(): Promise<Result[]> {
		const devices = await chrome.sessions.getDevices();
		return devices.map((device) => new SessionDevice(device));
	}
}

export class SessionDevice extends Result {
	title(): string {
		return this.device.deviceName;
	}

	tags(): Tag[] {
		return [
			{
				text: `${this.device.sessions.length} sessions`,
				type: "default",
			},
		];
	}
	constructor(private device: chrome.sessions.Device) {
		super();
	}
	async execute(search: Search, results: Result[]): Promise<void> {
		console.log("session device selected");
	}
}