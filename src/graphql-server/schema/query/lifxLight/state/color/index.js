const gql               = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString = gql.GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'color',
  fields: {
    hue: {
      type: GraphQLString
    },
    saturation: {
      type: GraphQLString
    },
    brightness: {
      type: GraphQLString
    },
    kelvin: {
      type: GraphQLString
    }
  }
});