import { resolve } from "path";
import { defineConfig } from "@pandacss/dev";

export const getDefaultConfig = (projectRoot) =>
	defineConfig({
		// Whether to use css reset
		preflight: true,

		// Where to look for your css declarations
		include: ["./src/**/*.{js,jsx,ts,tsx}"],

		// Files to exclude
		exclude: [],

		// Useful for theme customization
		theme: {
			extend: {},
		},

		// The output directory for your css system
		outdir: resolve(projectRoot, "/src/styled-system"),
	});