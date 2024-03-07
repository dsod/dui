import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
	html: {
		textRendering: "optimizeLegibility",
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
	},
});
