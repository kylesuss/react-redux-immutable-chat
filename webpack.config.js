const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const precss = require('precss')

const env = process.env.NODE_ENV || 'development'
const cssModuleIdentName = env === 'development'
  ? '[path][name]---[local]---[hash:base64:5]'
  : '[hash:base64]'

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
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        loader: 'style!css?modules&importLoaders=1&localIdentName=' + cssModuleIdentName + '!postcss'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['', 'src', 'node_modules']
  },
  postcss: function(webpackInstance) {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      }),
      precss
    ]
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
