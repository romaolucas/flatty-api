const path = require('path');
const logPath = path.join(__dirname, '../../logs/development.log');

module.exports = {
  web: {
    port: 3000
  },
  logging: {
    appenders: {
      consoleAppender : { type: 'console' },
      fileAppender: { type: 'file', filename: logPath },
    },
    categories: { default: { appenders: ['consoleAppender'], level: 'error' }},
  },
};
