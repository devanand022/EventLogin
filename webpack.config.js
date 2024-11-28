const { merge } = require("webpack-merge");
const path = require("path");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "devorg",
    projectName: "eventlogin",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" },
          ],
        },
      ],
    },
    devServer: {
      port: "8081",
      server: "https",
      client: {
        overlay: false,
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
    },
  });
};
