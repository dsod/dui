/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
	files: "src/**/*.tsx",
	targets: ["react", "solid", "qwik"],
	dest: "..",
	getTargetPath: ({ target }) => {
		const paths = {
			react: "react",
			solid: "solidjs",
			qwik: "qwik",
		};
		return paths[target];
	},
};
