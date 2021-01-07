const webpackMerge = require('webpack-merge');

const styleConfig = env => require(`./webpack.production.${env}`)(env);

module.exports = ({ mode, styling }) => {
  return webpackMerge.merge({
    mode,
    output: {
      publicPath: '/dist/',
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
    optimization: {
      usedExports: true,
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            // sync + async chunks
            chunks: 'all',
            // import file path containing node_modules
            test: /node_modules/
          }
        }
      },
    },
  }, styleConfig(styling))
};
