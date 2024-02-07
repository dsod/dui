import { qwikVite } from "@builder.io/qwik/optimizer";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vite";
import pkg from "./package.json";

type Packages = typeof pkg & {
	dependencies: Record<string, string>;
	peerDependencies: Record<string, string>;
};
const { dependencies = {}, peerDependencies = {} } = pkg as Packages;
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj) => Object.keys(obj).map(makeRegex);

export default defineConfig(() => {
	return {
		build: {
			target: "es2020",
			lib: {
				entry: "./src/index.ts",
				formats: ["es", "cjs"],
				fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
			},
			rollupOptions: {
				// externalize deps that shouldn't be bundled into the library
				external: [/^node:.*/, ...excludeAll(dependencies), ...excludeAll(peerDependencies)],
			},
		},
		plugins: [qwikVite(), nxViteTsPaths()],
	};
});
