const getLightInfo = require('../getLightInfo/index');

module.exports = (light) => {
 return getLightInfo(light, 'getAmbientLight');
};
