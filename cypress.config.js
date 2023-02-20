const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: "sdpi7u",
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
      .run({
         // the path is relative to the current working directory
          './cypress/e2e/1-geting-started/subscribe-page.cy',
       })
    },
  },
  component: {
    setupNodeEvents(on, config) {
      // component testing node events setup code
    },
  },
})
