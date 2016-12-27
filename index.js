module.exports = {
  Server: () => {
    require('./src/graphql-server')
  },
  Schema: () => {
    require('./src/graphql-server/schema')
  }
};