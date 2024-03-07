import { definePreset } from "@pandacss/dev";
import { globalCss } from "./global";
import { breakpoints } from "./theme/breakpoints";
import * as recipes from "./theme/recipes";

export default definePreset({
	theme: {
		extend: {
			breakpoints,
			recipes,
		},
	},
	globalCss,
});
