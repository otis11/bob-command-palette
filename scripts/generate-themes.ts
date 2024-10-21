import { readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const defaultTheme = "dark";
const themeFiles = readdirSync(resolve(__dirname, "../src/themes"));

let content =
	"/* This file is generated by **scripts/generate-themes.ts**. Do not modify by hand.  */\n";
content += themeFiles
	.map((themeFile) => `import "../themes/${themeFile}";\n`)
	.join("");
content += "\n";
content += `export const Themes = ["custom", ${themeFiles.map((themeFile) => `"${themeFile.replace(".css", "")}"`).join(", ")}] as const;\n`;
content += "export type Theme = (typeof Themes)[number];\n";
content += `export const defaultTheme: Theme = "${defaultTheme}";\n`;

writeFileSync(resolve(__dirname, "../src/theme/themes.ts"), content);
