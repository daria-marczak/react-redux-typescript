const webpackMerge = require('webpack-merge');

const styleConfig = env => require(`./build-utils/webpack.development.${env}`)(env);

module.exports = ({ mode, styling }) => {
  return webpackMerge.merge({
    mode,
    devtool: 'eval-source-map',
    devServer: {
      port: 9000
    }
  }, styleConfig(styling),
  )
};
