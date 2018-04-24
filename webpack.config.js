let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

const isProd = process.argv.indexOf('-p') !== -1;

let extractPlugin = new ExtractTextPlugin({
  filename: 'styles/main.[hash].css'
});

module.exports = {
  entry: {
    'app': './src/app/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js'
  },
  devtool: isProd ? '' : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader','resolve-url-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: "url-loader",
          options: {
            name: isProd ? '[name].[hash].[ext]' : '[name].[ext]',
            outputPath: isProd ? './img/' : "../../src/assets/img/",
            limit: 8192
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'Components': './components',
      'Utils': './utils',
      'Http': './http',
      'Styles': '../assets/styles'
    },
    extensions: ['.js', '.vue', '.json']
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks:['app']
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};