const path = require('path');

const buildConfig = (platform, extensions) => ({
  mode: "production",
  entry: `./src/index.ts`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `vee.${extensions}`,
    chunkFormat: extensions === "mjs" ? "module" : "commonjs",
    library: {
      type: extensions === "mjs" ? "module" : "commonjs"
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: platform,
  plugins: [],
  devtool: "source-map",
  experiments: {
    outputModule: extensions === "mjs"
  },
})


module.exports = [
  buildConfig("node", "cjs"),
  buildConfig("node", "mjs"),
];
