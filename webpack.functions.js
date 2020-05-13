const Dotenv = require('dotenv-webpack');
module.exports = {
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
      }
    ],
  },
  plugins: [
    new Dotenv({
      path: "./.env", // Path to .env file (this is the default)
    }),
  ]
}