const path = require('path')

module.exports = {
  apps : [
    {
      name: 'flare',
      script: 'python',
      args: './src/flaresolverr.py',
      env: {
        PORT: process.env.PORT,
      },
      cwd: __dirname
    }
  ],
};
