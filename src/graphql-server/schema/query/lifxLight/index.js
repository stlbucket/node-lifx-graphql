const gql               = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString     = gql.GraphQLString;

const state = require('./state/index');
const firmwareInfo = require('./firmwareInfo/index');
const firmwareVersion = require('./firmwareVersion/index');
const hardwareVersion = require('./hardwareVersion/index');
const wifiInfo = require('./wifiInfo/index');
const wifiVersion = require('./wifiVersion/index');

module.exports = new GraphQLObjectType({
  name: 'lifxLights',
  fields: {
    label: {
      type: GraphQLString,
      resolve: (lifxLight => {
        return lifxLight.label();
      })
    },
    power: {
      type: GraphQLString,
      resolve: (lifxLight => {
        return lifxLight.power();
      })
    },
    ambientLight: {
      type: GraphQLString,
      resolve: (lifxLight => {
        return lifxLight.ambientLight();
      })
    },
    state: {
      type: state
    },
    firmwareInfo: {
      type: firmwareInfo
    },
    firmwareVersion: {
      type: firmwareVersion,
    },
    hardwareVersion: {
      type: hardwareVersion
    },
    wifiInfo: {
      type: wifiInfo
    },
    wifiVersion: {
      type: wifiVersion
    },
  }
});