"use strict"

// This is a JavaScript-based config file containing every Mocha option plus others.
// If you need conditional logic, you might want to use this type of config,
// e.g. set options via environment variables 'process.env'.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  diff: true,
  extension: ["js", "cjs", "mjs"],
  file: ["./script.js"],
  jobs: 1,
  package: "./package.json",
  parallel: false,
  recursive: false,
  reporter: "spec",
  retries: 1,
  slow: "75",
  sort: false,
  spec: ["./tests/node.test.js"],
  timeout: "2000",
  ui: "bdd",
}
