exports.config = {
  directConnect: true,
  allScriptsTimeout: 11000,

  specs: [
    '*.js',
  ],

  capabilities: {
    'browserName': 'chrome',
  },

  baseUrl: 'http://127.0.0.1:8002/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};
