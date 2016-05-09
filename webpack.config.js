const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process.env.NODE_ENV || 'development'

const config = {
  entry: ['./src/app.js'],
  output: {
    filename: 'bundle.js',
    path: 'dist',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['', 'src', 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

if (env === 'development') {
  config.module.preLoaders.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  })
}

module.exports = config
