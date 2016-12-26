const Promise = require('bluebird');

module.exports = (light, label) => {
  const d = Promise.defer();

  light.setLabel(label, (error) => {
    if (error) {
      console.log('error', error);
      d.reject(error);
    } else {
      console.log('OK LABEL');
      d.resolve('LABEL SET');
    }
  });

  return d.promise;
};