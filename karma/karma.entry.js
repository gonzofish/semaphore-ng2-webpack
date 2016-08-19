require('es6-shim');
require('reflect-metadata');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');

const browserTesting = require('@angular/platform-browser-dynamic/testing');
const coreTesting = require('@angular/core/testing');
const context = require.context('../src/', true, /\.spec\.ts$/);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

coreTesting.setBaseTestProviders(
    browserTesting.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    browserTesting.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

context.keys().forEach(context);