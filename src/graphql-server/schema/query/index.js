const gql = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString = gql.GraphQLString;
const GraphQLList = gql.GraphQLList;

const gqlLifxClient = require('../../../gqlLifxClient');
const lifxLight = require('./lifxLight');

module.exports = new GraphQLObjectType({
  name: 'query',
  fields: {
    lifxLights: {
      type: new GraphQLList(lifxLight),
      resolve() {
        return gqlLifxClient().gqlLifxLights();
      },
    },
  }
});