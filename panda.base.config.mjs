import { resolve } from "path";
import { defineConfig } from "@pandacss/dev";
import { button } from "./packages/css/src/recipies";

export const getDefaultConfig = (projectRoot) =>
	defineConfig({
		// Whether to use css reset
		preflight: true,

		// Where to look for your css declarations
		include: [
			resolve(projectRoot, "src/**/*.{js,jsx,ts,tsx}"),
			resolve(projectRoot, ".storybook/**/*.{js,jsx,ts,tsx}"),
		],

		// Files to exclude
		exclude: [],

		// Useful for theme customization
		theme: {
			extend: {
				recipes: {
					button: button,
				},
			},
		},

		staticCss: {
			recipes: {
				input: ["*"],
			},
		},

		// The output directory for your css system
		outdir: resolve(projectRoot, "/src/styled-system"),
		outExtension: "js",
	});
