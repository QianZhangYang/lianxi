const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /.(png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2 * 1024,
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          outputPath: 'fonts',
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlwebpackplugin({
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 30000,
    open: true,
  },
}
