const { defineConfig } = require("cypress");

module.exports = exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    projectId: "w1o54f",
  },
});
