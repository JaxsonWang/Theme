'use strict'

const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const htmlFileNames = fs.readdirSync('./src/html/')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const getEntries = () => {
  return [
    './src/js/app.js',
    './src/scss/app.scss'
  ]
}

const getPlugins = () => {
  const plugins = [
    require('autoprefixer'),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('../src/assets/'),
          to: resolve('../dist/assets/')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: './assets/css/styles.css',
      allChunks: true
    })
  ]
  htmlFileNames.forEach(filename => {
    if (filename.substr(0, 1) !== '_') {
      const splitted = filename.split('.')
      if (splitted[1] === 'html') {
        plugins.push(
          new HtmlWebpackPlugin({
            template: `./src/html/${filename}`,
            filename: `./${filename}`,
            minify: false
          })
        )
      }
    }
  })

  return plugins
}

module.exports = {
  entry: getEntries(),
  output: {
    filename: './assets/js/bundle.js'
  },
  plugins: getPlugins(),
  module: {
    rules: [
      {
        test: /\.(html)$/,
        loader: resolve('./loader/html-loader.js'),
        options: {
          html: htmlFileNames
        }
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: false,
              plugins: () => [
                require('cssnano'),
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jpg', '.html', '.scss'],
    alias: {
      '@': resolve('../src')
    }
  }
}
