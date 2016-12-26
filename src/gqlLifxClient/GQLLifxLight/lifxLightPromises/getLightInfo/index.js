const Promise = require('bluebird');

module.exports = (light, methodName) => {
  const d = Promise.defer();
  light[methodName]((err, result) => {
    if (err) {
      d.reject(err);
    } else {
      d.resolve(result);
    }
  });

  return d.promise;
};
