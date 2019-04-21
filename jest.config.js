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
  "preset": "jest-puppeteer",
  moduleNameMapper: {
    "IndexScripts(.*)$": "<rootDir>src/index/scripts/$1",
    "IndexComponents(.*)$": "<rootDir>src/index/scripts/components/$1",
    "IndexContainers(.*)$": "<rootDir>src/index/scripts/containers/$1",
    "IndexStyles(.*)$": "<rootDir>src/index/styles/$1",
    "Images(.*)$": "<rootDir>assets/images$1"
  }
};