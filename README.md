<center> <h1>React boilerplate</h1> </center>

Personal React boilerplate project for learning purposes.

## Technologies

- yarn
- Webpack
- ESLint and prettier 🎨
- Lint-staged with husky
- React
- TravisCI

## Scripts

| Script   | Description                             |
| -------- | --------------------------------------- |
| dev      | Run the application in development mode. Depending on your styling choice, choose either `:scss` or `styled` to get the correct config. |
| prod     | Run the application in production mode. Depending on your styling choice, choose either `:scss` or `styled` to get the correct config. |
| format   | Use prettier to format the files        |
| lint     | Run eslint (only point out the issues)  |
| lint:fix | Run eslint with `--write` flag          |
| test  | Run test suite |
| deploy | Deploy webpack application from /dist folder |
| storybook | Run storybook |
| build-storybook | Build storybook |

## Goals

- ✅ TravisCI config + AWS deployment
- ✅ Storybook configuration (and deploy to AWS)
- 🚧 Storybook CI deployment configuration
- ✅ tree shaking and code splitting
- ✅ Webpack workflows for better performance (styles, images pipelines)
- ✅ config for styled-components
- ✅ separate config for SCSS
- 🚧 deploy feature branches (dynamic stagings)

### Smaller goals
- 🚧 [Lighthouse CI][https://github.com/GoogleChrome/lighthouse-ci]
- 🚧 [webpack bundle analyzer][https://www.npmjs.com/package/webpack-bundle-analyzer]
- 🚧 implement some code statistics tools (CC, code forensics)

## Notes
In order to optimize SVGs, please use the [svgomg][https://jakearchibald.github.io/svgomg/].