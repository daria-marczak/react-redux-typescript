const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MediaQuerySplittingPlugin = require('media-query-splitting-plugin');

module.exports = () => ({
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new MediaQuerySplittingPlugin(),
  ],
});
