const { resolve } = require("path");

module.exports = {
	getDefaultConfig: (projectRoot) => ({
		plugins: [require("@pandacss/dev/postcss")({ configPath: resolve(projectRoot, "panda.config.js") })],
	}),
};
