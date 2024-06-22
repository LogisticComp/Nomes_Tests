/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/apiTests/**/*.tests.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
