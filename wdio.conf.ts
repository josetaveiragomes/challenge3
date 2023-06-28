const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
  specs: ['./tests/ui/specs/**/*.ts'],
  suites: {
    header: ['./tests/ui/specs/header/*.ts'],
  },
  exclude: [],
  maxInstances: 5,
  capabilities: [
    {
      maxInstances: 3,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': { 
        args: [
          "--headless",
          "--no-sandbox",
          "--ignore-certificate-errors",
          "--allow-insecure-localhost",
          "--allow-running-insecure-content",
          "--no-sandbox",
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--window-size=1920,1080",
        ],
      },
    },
  ],
  logLevel: 'error',
  waitforTimeout: 5000,
  connectionRetryTimeout: 15000,
  connectionRetryCount: 3,
  specFileRetries: 0,
  services: [
    'selenium-standalone', 
    [TimelineService]
  ],
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'timeline', 
      { 
        outputDir: 'reports',
        embedImages: true,
        screenshotStrategy: 'on:error',
      }
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 10000,
    bail: false
  },
}
