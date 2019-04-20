module.exports = {
  setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],
	moduleFileExtensions: ["js"],
    transform: {
		"^.+\\.js?$": "babel-jest",
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    },
    moduleNameMapper: {
    	"^@/(.*)$": "<rootDir>/src/$1",
  	},
  	moduleDirectories: [
    	"node_modules",
    	"src",
	],
  "preset": "jest-puppeteer"
};