const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
  return webpackMerge.merge(
    {
      mode: 'none',
      entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
      },
      target: 'web',
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new TsconfigPathsPlugin()],
      },
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: '/node_modules/',
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: '[hash].[ext]',
                  outputPath: 'assets',
                },
              },
            ],
          },
        ],
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', 'index.html'),
        }),
      ],
    },
    modeConfig(mode),
  );
};
