const webpackConfig = require('./webpack.config');

module.exports = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'max-len': [2, 120]
  },
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  settings: {
    'import/resolver': {
      webpack: { config: webpackConfig,  },
    },
  },
  globals: {
    API_URL: true,
    PRODUCTION_MODE: true,
    SENTRY_DSN: true,
  }
};
