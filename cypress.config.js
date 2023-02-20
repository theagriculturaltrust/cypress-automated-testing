const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "sdpi7u",
    setupNodeEvents(on, config) {
      cypress
       .run({
         // the path is relative to the current working directory
         spec: './cypress/e2e/1-geting-started/subscribe-page.cy',
       })
        .then(testResults => {
         console.log("---resultJSON---");
         console.log(testResults);     
       })
        .catch((err) => {
         console.error(err)
       })
    },
  },
});
