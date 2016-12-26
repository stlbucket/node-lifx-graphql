const Promise = require('bluebird');

module.exports = (light, duration) => {
  const d = Promise.defer();

  light.on(duration, (error, result) => {
    if (error) {
      console.log(error);
      d.reject(error)
    } else {
      // console.log('LIGHT TURNED ON', light, result);
      d.resolve(result);
    }
  });

  return d.promise;
};
