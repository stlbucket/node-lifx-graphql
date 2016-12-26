const gql = require('graphql');
const GraphQLSchema = gql.GraphQLSchema;

const query = require('./query');
const mutation = require('./mutation');

module.exports = new GraphQLSchema({
  query: query,
  mutation: mutation
});
