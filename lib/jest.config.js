/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
        "^@tgd/(.*)$": "<rootDir>/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/../__mocks__/mocks.js",
    },
    verbose: true,
    collectCoverage: false,
    coverageReporters: ["lcov"],
    coverageDirectory: "../test-coverage",
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    setupFiles: ["jest-canvas-mock"],
    rootDir: "src",
}
