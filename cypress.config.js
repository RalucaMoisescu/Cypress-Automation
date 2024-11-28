const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
});

module.exports = defineConfig({
  projectId: 'pnji2g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on); // for html reprts
    },
  },
});
