const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
const video = require('wdio-video-reporter');

exports.config = {
  specs: ['./tests/ui/specs/**/*.ts'],
  suites: {
    login: ['./tests/ui/specs/header.e2e.ts'],
  },
  exclude: [],
  maxInstances: 5,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': { 
        args: [
          // "--headless",
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
    [
      video, 
      {
        outputDir: 'reports',
        saveAllVideos: false,
        videoSlowdownMultiplier: 3,
        videoRenderTimeout: 5,
      }
    ],
    [
      'allure', 
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      }
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 10000,
    bail: false
  },
}
