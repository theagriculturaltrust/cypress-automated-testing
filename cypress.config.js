const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "sdpi7u",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
