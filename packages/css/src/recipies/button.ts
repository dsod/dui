import { defineRecipe } from "@pandacss/dev";
export const buttonRecipie = defineRecipe({
	className: "button",
	staticCss: ["*"],
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "blue.900",
		color: "stone.50",
		borderRadius: "8px",
		boxShadow: "0 3px 5px rgba(0, 0, 0, 0.18)",
		lineHeight: "1.1",
	},

	variants: {
		size: {
			small: {
				padding: "0.25em 0.75em",
				minWidth: "10ch",
				minHeight: "44px",
			},
			medium: {
				padding: "0.5em 1.25em",
				minWidth: "12ch",
				minHeight: "48px",
			},
			large: {
				padding: "0.75em 1.75em",
				minWidth: "14ch",
				minHeight: "52px",
			},
		},
	},
});

export type { ButtonVariant } from "styled-system/recipes";
