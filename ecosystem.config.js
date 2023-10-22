const path = require('path')

module.exports = {
  apps : [
    {
      name: 'flare',
      script: 'python',
      args: './src/flaresolverr.py',
      env: {
        PORT: 8181,
      },
      cwd: __dirname
    }
  ],
};
