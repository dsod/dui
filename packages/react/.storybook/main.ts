import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
	stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
	framework: {
		name: "@storybook/react-vite",
		options: {
			builder: {
				viteConfigPath: "packages/react/vite.config.ts",
			},
		},
	},

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	viteFinal: async (config: any) => {
		return config;
	},
};

export default config;
