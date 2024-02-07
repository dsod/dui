import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		target: "es2020",
		lib: {
			entry: "./src/index.tsx",
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
		},
	},
	plugins: [react(), nxViteTsPaths()],
});
