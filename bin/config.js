require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.PORT ? process.env.PORT : '3030',
  app: {
    title: 'Node-api',
    description: 'Test Api from React application'
  },

}, environment);
