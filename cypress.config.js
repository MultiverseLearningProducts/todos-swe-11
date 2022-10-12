const { defineConfig } = require("cypress");

module.exports = exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
