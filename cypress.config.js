const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:  "https://opensource-demo.orangehrmlive.com/",
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    watchForFileChanges: false,
    viewportWidth: 1500,
    viewportHeight: 800,
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on("task",{
      // implement node event listeners here
      })
    },
  },
});