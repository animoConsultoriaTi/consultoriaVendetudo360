const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: '/node_modules/',
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
