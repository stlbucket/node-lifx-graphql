const EventEmitter = require('events').EventEmitter;
const Promise = require('bluebird');
const LifxClient = require('node-lifx').Client;
const GQLLifxLight = require('../GQLLifxLight/index');
const lifxClientPromises = require('./lifxClientPromises');

let _gqlLifxLights = [];

class GQLLifxClient extends EventEmitter{
  constructor(){
    super();
    this.lifxClient = new LifxClient();
    EventEmitter.call(this);
  }

  init() {
    this.subscribeToLightNew();
    this.subscribeToLightOffline();
    this.subscribeToLightOnline();

    return Promise.resolve(this.lifxClient.init({
      lightOfflineTolerance: 3, // A light is offline if not seen for the given amount of discoveries
      messageHandlerTimeout: 45000, // in ms, if not answer in time an error is provided to get methods
      startDiscovery: true, // start discovery after initialization
      resendPacketDelay: 150, // delay between packages if light did not receive a packet (for setting methods with callback)
      resendMaxTimes: 3, // resend packages x times if light did not receive a packet (for setting methods with callback)
      debug: false, // logs all messages in console if turned on
      address: '0.0.0.0', // the IPv4 address to bind the udp connection to
      broadcast: '255.255.255.255', // set's the IPv4 broadcast address which is addressed to discover bulbs
      lights: [] // Can be used provide a list of known light IPv4 ip addresses if broadcast packets in network are not allowed
                 // For example: ['192.168.0.112', '192.168.0.114'], this will then be addressed directly
    }));
  }


  static logLightToConsole(light){
    console.log(`
========= NEW LIGHT =========
${light}
======= END NEW LIGHT =======
`);
    console.log(`===== TOTAL LIGHTS: ${_gqlLifxLights.length}`)
  }


  subscribeToLightNew() {
    const emitter = this;

    this.lifxClient.on('light-new', function (light) {
      const gqlLight = new GQLLifxLight(light);
      _gqlLifxLights = _gqlLifxLights.concat([gqlLight]);

      return gqlLight.label()
        .then(lightLabel => {
          emitter.emit('newLight', light.label);
          GQLLifxClient.logLightToConsole(lightLabel);
        });
    });
  }

  subscribeToLightOffline() {
    this.lifxClient.on('light-offline', function (light) {
      console.log('light-offline', light.label);
    });
  }

  subscribeToLightOnline() {
    this.lifxClient.on('light-online', function (light) {
      console.log('light-online', light.label);
    });
  }

  allLightsOn() {
    return Promise.each(
      _gqlLifxLights,
      (gqlLifxLight) => {
        return gqlLifxLight.on(1000);
      }
    )
  }

  allLightsOff() {
    console.log('HEYO', _gqlLifxLights);
    return Promise.each(
      _gqlLifxLights,
      (gqlLifxLight) => {
        console.log('HEYO BYE');
        return gqlLifxLight.off(1000);
      }
    )
  }

  allLightsColor(hue, saturation, brightness, kelvin, duration) {
    return Promise.each(
      _gqlLifxLights,
      (gqlLifxLight) => {
        return gqlLifxLight.color(hue, saturation, brightness, kelvin, duration)
          .then(result => {
            return gqlLifxLight.state();
          });
      }
    )
  }

  setLightColor(lightLabel, hue, saturation, brightness, kelvin, duration) {
    const gqlLifxLight = _gqlLifxLights.find(l => l.lifxLight.label === lightLabel);

    console.log('gqlLifxLight', gqlLifxLight);

    if (gqlLifxLight) {
      return gqlLifxLight.color(hue, saturation, brightness, kelvin, duration)
        .then(result => {
          return gqlLifxLight.state();
        });
    }
  }

  allLightsRandomColor() {
    const hue        = Math.random() * 100;
    const saturation = Math.random() * 40 + 60;
    const brightness = Math.random() * 30 + 40;
    const kelvin     = Math.random() * 4000 + 3000;
    const duration   = Math.random() * 2000 + 500;

    console.log(hue, saturation, brightness, kelvin, duration);

    return this.allLightsColor(hue, saturation, brightness, kelvin, duration);
  }

  startDiscovery() {
    return lifxClientPromises.startDiscovery(this.lifxClient);
  }

  stopDiscovery(){
    return lifxClientPromises.stopDiscovery(this.lifxClient);
  }

  // this is the entry point for GraphQL queries
  gqlLifxLights(){
    return _gqlLifxLights;
  }
}

module.exports = GQLLifxClient;