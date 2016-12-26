const gql               = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString        = gql.GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'firmwareInfo',
  fields: {
    signal: {
      type: GraphQLString
    },
    tx: {
      type: GraphQLString
    },
    rx: {
      type: GraphQLString
    }
  },
  resolve: (gqlLifxLight => {
    return gqlLifxLight.firmwareInfo();
  })
});