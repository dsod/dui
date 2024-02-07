import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vite";

export default defineConfig(() => {
	return {
		build: {
			target: "es2020",
			lib: {
				entry: "./src/index.tsx",
				formats: ["es", "cjs"],
				fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
			},
		},
		plugins: [nxViteTsPaths()],
	};
});
