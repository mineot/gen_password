const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  target: "web",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "gen_password.js",
    library: "$.mineot.gen_password",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@errors": path.resolve(__dirname, "src/core/errors"),
      "@enums": path.resolve(__dirname, "src/core/enums"),
    },
  },
  devtool: "source-map",
};
