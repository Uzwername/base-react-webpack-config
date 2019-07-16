module.exports = (function () {

	if (process.env.NODE_ENV === `production`) {

		// No console
		return {
			presets: ["@babel/preset-env", "@babel/preset-react"],
  			plugins: ["transform-remove-console"]
		};

	} else {

		return {
			presets: ["@babel/preset-env", "@babel/preset-react"]
		};	

	}

})();