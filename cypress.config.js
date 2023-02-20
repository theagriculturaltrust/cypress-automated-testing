const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: "sdpi7u",
    setupNodeEvents(on, config) {
      // e2e testing node events setup code

         // the path is relative to the current working directory
          spec: '/e2e/1-getting-started/subscribe-page.cy',

    },
  },
  component: {
    setupNodeEvents(on, config) {
      // component testing node events setup code
    },
  },
})
