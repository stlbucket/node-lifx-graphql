const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
require('../gqlLifxClient')();

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(8080);
