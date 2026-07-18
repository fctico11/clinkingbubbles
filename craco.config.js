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
    // Disable automatic <script>/<link> injection: index.html emits the CSS
    // links itself and loads the JS bundles after the first paint (see the
    // bootstrap script in public/index.html), so the static hero pre-paint is
    // never delayed by the bundle download.
    configure: (config) => {
      for (const plugin of config.plugins) {
        if (plugin.constructor.name === "HtmlWebpackPlugin") {
          if (plugin.userOptions) plugin.userOptions.inject = false;
          if (plugin.options) plugin.options.inject = false;
        }
      }
      return config;
    },
  },
};
