const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      // {
      //   test: /.(png|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 2 * 1024,
      //         outputPath: 'images',
      //       },
      //     },
      //   ],
      // },
      {
        test: /.(png|gif)$/,
        // type: 'asset/resource',
        type: 'asset',
        // generator: {
        //   filename: 'images/[name]-[hash:6][ext]',
        // },
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024,
          },
        },
      },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     outputPath: 'fonts',
      //   },
      // },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'fonts/[name]-[hash:10][ext]',
      //   },
      // },
      {
        test: /\.js$/,
        // exclude: /(node_modules)/,
        // use: [
        //   {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env'],
        //     },
        //   },
        // ],
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new htmlwebpackplugin({
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 30000,
    open: true,
  },
}
