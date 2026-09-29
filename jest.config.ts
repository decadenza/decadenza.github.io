// Configuration for the Typescript/Javascript test framework.

import type { Config } from 'jest';

const config: Config = {

    // The root directory that Jest should scan for tests and modules.
    rootDir: './',

    // Directories that Jest should use to search for files in.
    roots: ['<rootDir>/src'],

    // Test files will be matched by patterns like __tests__/**/*.ts, *.test.ts
    testMatch: [
        '<rootDir>/src/**/*.{test,tests}.{js,jsx,ts,tsx}',
    ],

    // Module file extensions for importing.
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    // Mappers for handling non-JavaScript assets (like CSS or images).
    // 'identity-obj-proxy' helps mock CSS imports.
    // File mocks help with image imports.
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__mocks__/fileMock.js',
        // If you use absolute paths in your imports (e.g., import MyComponent from '@components/MyComponent'),
        // you'll need to add aliases here matching your tsconfig.json paths.
        // e.g., '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    },

    // A preset that is used as a base for Jest's configuration.
    // 'ts-jest' provides the TypeScript transformation.
    // 'jsdom' is the test environment for browser APIs.
    preset: 'ts-jest',

    // Set a web-based environment.
    testEnvironment: 'jsdom',

};

export default config; // Use export default instead of module.exports in TS