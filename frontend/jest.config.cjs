const path = require('path');

// see https://gist.github.com/KienVu1504/5976b3b081d2a1801df5bf6bd18527b7
module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.vue$": "@vue/vue3-jest",
        "^.+\\js$": "babel-jest",
        "^.+\\.[t|j]sx?$": "babel-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
    moduleFileExtensions: ["vue", "js"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        ".+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$":
            "jest-transform-stub",
        "^@bhplugin/(.*)$": "jest-transform-stub",
    },
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
    coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
    coverageReporters: ["text", "json-summary"],
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
}
