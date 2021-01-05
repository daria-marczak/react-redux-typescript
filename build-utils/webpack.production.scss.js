const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MediaQuerySplittingPlugin = require('media-query-splitting-plugin');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
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
