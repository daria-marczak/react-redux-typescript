<center> <h1>React boilerplate</h1> </center>

Personal React boilerplate project for learning purposes.

## Technologies

- yarn
- Webpack
- ESLint and prettier 🎨
- Lint-staged with husky

## Scripts

| Script   | Description                             |
| -------- | --------------------------------------- |
| dev      | Run the application in development mode |
| prod     | Run the application in production mode  |
| format   | Use prettier to format the files        |
| lint     | Run eslint (only point out the issues)  |
| lint:fix | Run eslint with `--write` flag          |

## Goals

- 🚧 implement some code statistics tools (CC, code forensics)
- 🚧 TravisCI config + AWS deployment
- 🚧 Storybook configuration (with nginx to deploy)
- 🚧 [Lighthouse CI][https://github.com/GoogleChrome/lighthouse-ci]
- 🚧 [webpack bundle analyzer][https://www.npmjs.com/package/webpack-bundle-analyzer]
- ✅ tree shaking and code splitting
- ✅ Webpack workflows for better performance (styles, images pipelines)
- ✅ config for styled-components
- ✅ separate config for SCSS

## Notes
In order to optimize SVGs, please use the [svgomg][https://jakearchibald.github.io/svgomg/].