const Promise = require('bluebird');

module.exports = (light, hue, saturation, brightness, kelvin, duration) => {
  // console.log('COLOR', light, hue, saturation, brightness);

  const d = Promise.defer();

  light.color(hue, saturation, brightness, kelvin, duration, (error) => {
    if (error){
      console.log('error', error);
      d.reject(error);
    } else {
      d.resolve('COLOR CHANGED');
    }
  });

  return d.promise;
};