
const withImages = require('next-images');


module.exports = withImages({
  env: {
    ANY_ENV_KEY: "ANY_ENV_VARIABLE"
  }
});