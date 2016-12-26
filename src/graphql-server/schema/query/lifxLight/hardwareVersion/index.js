const gql               = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString     = gql.GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'hardwareVersion',
  fields: {
    vendorId: {
      type: GraphQLString
    },
    vendorName: {
      type: GraphQLString
    },
    productId: {
      type: GraphQLString
    },
    productName: {
      type: GraphQLString
    },
    version: {
      type: GraphQLString
    }
  },
  resolve: (lifxLight => {
    return lifxLight.hardwareVersion();
  })
});