'use strict';

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    notify: true,
    testEnvironment: 'node',
    testMatch: [
        '<rootDir>/test/**/*-spec.js',
        '<rootDir>/test/*-spec.js',
    ],
};
