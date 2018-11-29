module.exports = {
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupTestFrameworkScriptFile: "<rootDir>test/setupTests.js",
  moduleFileExtensions: [
    "js",
    "json",
    "jsx"
  ]
};
