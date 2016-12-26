const gql               = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString        = gql.GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'firmwareVersion',
  fields: {
    majorVersion: {
      type: GraphQLString
    },
    minorVersion: {
      type: GraphQLString
    }
  },
  resolve: (gqlLifxLight => {
    return gqlLifxLight.firmwareVersion();
  })
});