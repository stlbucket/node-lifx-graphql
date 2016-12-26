const gql = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString = gql.GraphQLString;
const GraphQLList = gql.GraphQLList;

const gqlLifxClient = require('../../../gqlLifxClient');

const state = require('../query/lifxLight/state');

module.exports = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    allLightsOff: {
      type: GraphQLString,
      resolve() {
        return gqlLifxClient().allLightsOff()
          .then(result => {
            // console.log('result', result);
            return 'lights out'
          });
      }
    },
    allLightsOn: {
      type: GraphQLString,
      resolve() {
        return gqlLifxClient().allLightsOn()
          .then(result => {
            // console.log('result', result);
            return 'lights on'
          });
      }
    },
    allLightsColor: {
      type: gql.GraphQLString,
      args: {
        hue: {type: new gql.GraphQLNonNull(gql.GraphQLInt)},
        saturation: {type: new gql.GraphQLNonNull(gql.GraphQLInt)},
        brightness: {type: new gql.GraphQLNonNull(gql.GraphQLInt)},
        kelvin: {type: gql.GraphQLInt},
        duration: {type: gql.GraphQLInt}
      },
      resolve: (value, color) => {
        return gqlLifxClient().allLightsColor(color.hue, color.saturation, color.brightness, color.kelvin, color.duration);
      }
    },
    setLightColor: {
      type: state,
      args: {
        lightLabel: {type: new gql.GraphQLNonNull(gql.GraphQLString)},
        hue: {type: new gql.GraphQLNonNull(gql.GraphQLInt)},
        saturation: {type: new gql.GraphQLNonNull(gql.GraphQLInt)},
        brightness: {type: new gql.GraphQLNonNull(gql.GraphQLInt)},
        kelvin: {type: gql.GraphQLInt},
        duration: {type: gql.GraphQLInt}
      },
      resolve: (value, color) => {
        return gqlLifxClient().setLightColor(color.lightLabel, color.hue, color.saturation, color.brightness, color.kelvin, color.duration)
          .then(state => {
            console.log('NEW LIGHT STATE', state);
            return state;
          });
      }
    },
    startDiscovery: {
      type: gql.GraphQLString,
      args: {},
      resolve: (value, color) => {
        return gqlLifxClient().startDiscovery()
          .then(result => {
            return 'START DISCOVERY';
          });
      }
    },
    stopDiscovery: {
      type: gql.GraphQLString,
      args: {},
      resolve: (value, color) => {
        return gqlLifxClient().stopDiscovery()
        .then(result => {
          return 'STOP DISCOVERY';
        });
      }
    },
  }
});