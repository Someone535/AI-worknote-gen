const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watchOptions: {
    ignored: /node_modules/
  },
  entry: {
    index: './src/js/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html'
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ]
      },
    ]
  }
};
