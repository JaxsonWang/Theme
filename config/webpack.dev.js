const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const esLintPlugin = new ESLintPlugin({
  emitWarning: true,
  emitError: true,
  failOnWarning: false,
  failOnError: false
})

module.exports = {
  mode: 'development',
  entry: {
    index: [
      './src/js/index.js',
      './src/scss/index.scss'
    ]
  },
  output: {
    path: resolve('../dist'),
    filename: 'index.js'
  },
  externals: {
    bootstrap: 'bootstrap'
  },
  devServer: {
    contentBase: resolve('../src/html'),
    host: '0.0.0.0',
    port: 65506,
    hot: true,
    watchContentBase: true,
    open: false,
    inline: false,
    clientLogLevel: 'silent'
  },
  devtool: 'source-map',
  plugins: [
    esLintPlugin
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': resolve('../src')
    }
  }
}
