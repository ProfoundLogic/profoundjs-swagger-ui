/**
 * @prettier
 */

import configBuilder from "./_config-builder"

const result = configBuilder(
  {
    minimize: true,
    mangle: true,
    sourcemaps: false,
    includeDependencies: false,
  },
  {
    entry: {
      "swagger-ui": [
        "./src/index.js",
      ],
    },

    output: {
      globalObject: "this",
      library: "SwaggerUICore",
    },
  }
)

export default result
