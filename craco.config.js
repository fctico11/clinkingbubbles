const path = require("path");

// react-router v7's package exports point every condition at its development
// build, so webpack bundles dev-mode code into production. Alias the two
// entry points to the production build instead.
module.exports = {
  webpack: {
    alias: {
      "react-router$": path.resolve(
        __dirname,
        "node_modules/react-router/dist/production/index.mjs"
      ),
      "react-router/dom$": path.resolve(
        __dirname,
        "node_modules/react-router/dist/production/dom-export.mjs"
      ),
    },
  },
};
