const webpackMerge = require('webpack-merge');

const styleConfig = env => require(`./webpack.production.${env}`)(env);

module.exports = ({ mode, styling }) => {
  return webpackMerge.merge({
    mode,
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'image-webpack-loader',
          // Specify enforce: 'pre' to apply the loader
          // before url-loader/svg-url-loader
          // and not duplicate it in rules with them
          enforce: 'pre'
        }
      ],
    },
  }, styleConfig(styling))
};
