const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        }
      },
    ]
  }
});