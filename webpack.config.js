const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'presentation-drawer.js',
    publicPath: '/dist/',
    library: "presentation-drawer",
    globalObject: 'this',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};

// put back for production
// externals: {
//   'presentation-decorator': {
//     commonjs: 'presentation-decorator',
//     commonjs2: 'presentation-decorator',
//     amd: 'presentation-decorator',
//     root: 'presentation-decorator'
//   },
//   'presentation-dom': {
//     commonjs: 'presentation-dom',
//     commonjs2: 'presentation-dom',
//     amd: 'presentation-dom',
//     root: 'presentation-dom'
//   }
// },
