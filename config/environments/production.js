module.exports = {
  web: {
    port: process.env.PORT
  },
  logging: {
    appenders: { 
      consoleAppender: {
        type: 'console', layout: { type: 'basic' }
      },
    },
  },
};

