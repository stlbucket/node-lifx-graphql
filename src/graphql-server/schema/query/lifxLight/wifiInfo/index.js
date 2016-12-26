const gql               = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQlInt        = gql.GraphQLInt;
const GraphQLString     = gql.GraphQLString

module.exports = new GraphQLObjectType({
  name: 'wifiInfo',
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
  resolve: (lifxLight => {
    return lifxLight.wifiInfo;
  })
});