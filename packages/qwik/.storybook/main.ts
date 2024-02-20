import type { StorybookConfig } from "storybook-framework-qwik";

const config: StorybookConfig = {
	addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
	stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
	framework: {
		name: "storybook-framework-qwik",
	},
	core: {
		renderer: "storybook-framework-qwik",
	},

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	viteFinal: async (config: any) => {
		return config;
	},
};

export default config;
