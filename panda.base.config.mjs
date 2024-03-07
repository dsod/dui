import { resolve } from "path";
import { defineConfig } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-panda";

import preset from "./packages/css";

export const getDefaultConfig = (projectRoot) =>
	defineConfig({
		// Whether to use css reset
		preflight: true,

		presets: [pandaPreset, preset],

		// Where to look for your css declarations
		include: [
			resolve(projectRoot, "src/**/*.{js,jsx,ts,tsx}"),
			resolve(projectRoot, ".storybook/**/*.{js,jsx,ts,tsx}"),
		],

		// Files to exclude
		exclude: [],

		staticCss: {
			recipes: {
				input: ["*"],
			},
		},

		// The output directory for your css system
		outdir: resolve(projectRoot, "/src/styled-system"),
		outExtension: "js",
	});
