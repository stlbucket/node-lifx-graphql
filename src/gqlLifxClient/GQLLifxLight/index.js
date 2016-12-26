const Promise           = require('bluebird');
const lifxLightPromises = require('./lifxLightPromises/index');

class GQLLifxLight{
  constructor(lifxLight){
    this.lifxLight = lifxLight;
  }

  //QUERIES
  ambientLight() {
    return lifxLightPromises.ambientLight(this.lifxLight);
  }

  label() {
    return lifxLightPromises.label(this.lifxLight);
  }

  state(){
    return lifxLightPromises.state(this.lifxLight);
  }

  power(){
    return lifxLightPromises.power(this.lifxLight);
  }

  firmwareInfo(){
    return lifxLightPromises.firmwareInfo(this.lifxLight);
  }

  firmwareVersion() {
    return lifxLightPromises.firmwareVersion(this.lifxLight);
  }

  hardwareVersion() {
    return lifxLightPromises.hardwareVersion(this.lifxLight);
  }

  wifiInfo() {
    return lifxLightPromises.wifiInfo(this.lifxLight);
  }

  wifiVersion() {
    return lifxLightPromises.wifiVersion(this.lifxLight);
  }

  //MUTATIONS
  color(hue, saturation, brightness, kelvin, duration) {
    return lifxLightPromises.color(this.lifxLight, hue, saturation, brightness, kelvin, duration);
  }

  setLabel(label) {
    return lifxLightPromises.setLabel(this.lifxLight, label);
  }

  on(duration) {
    return lifxLightPromises.on(this.lifxLight, duration);
  }

  off(duration) {
    return lifxLightPromises.off(this.lifxLight, duration);
  }

}

module.exports = GQLLifxLight;