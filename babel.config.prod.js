module.exports = {
	presets: [
		"@babel/preset-env",
		"@babel/preset-react",
	],
	// No console in production
	plugins: [
		"transform-remove-console",
	],
};
