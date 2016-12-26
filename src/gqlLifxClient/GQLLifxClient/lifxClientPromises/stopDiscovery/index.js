const Promise = require('bluebird');

module.exports = (client) => {
  return Promise.resolve(client.stopDiscovery());
};
