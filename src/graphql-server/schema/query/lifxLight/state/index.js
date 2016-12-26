const gql               = require('graphql');
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString     = gql.GraphQLString;

const color = require('./color/index');

module.exports = new GraphQLObjectType({
  name: 'state',
  fields: {
    color: {
      type: color,
      resolve: (state => {
        return state.color;
      })
    },
    power: {
      type: GraphQLString
    },
    label: {
      type: GraphQLString
    }
  },
  resolve: (lifxLight => {
    return lifxLight.state();
  })
});