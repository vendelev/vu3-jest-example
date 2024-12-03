const path = require('path');

module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.vue$": "@vue/vue3-jest",
        "^.+\\js$": "babel-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
    moduleFileExtensions: ["vue", "js"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@bhplugin/vue3-datatable$": path.join(
            __dirname,
            "node_modules/@bhplugin/vue3-datatable/dist/vue3-datatable.cjs"
          ),
    },
    coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
    coverageReporters: ["text", "json-summary"],
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/(?!vuetify)", "<rootDir>/node_modules/(?!@bhplugin)"]
}
