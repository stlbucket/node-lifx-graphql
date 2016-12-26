const gql               = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString        = gql.GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'wifiVersion',
  fields: {
    majorVersion: {
      type: GraphQLString
    },
    minorVersion: {
      type: GraphQLString
    }
  },
  resolve: (lifxLight => {
    return lifxLight.wifiVersion;
  })
});