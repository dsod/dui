import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	build: {
		target: "es2020",
		lib: {
			entry: "./src/index.tsx",
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
		},
	},
	plugins: [solidPlugin(), nxViteTsPaths()],
});
