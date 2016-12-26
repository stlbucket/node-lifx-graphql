const GQLLifxClient = require('./GQLLifxClient/index');

let _gqlClient = null;

module.exports = () => {
  if (_gqlClient === null){
    _gqlClient = new GQLLifxClient();
    return _gqlClient.init()
      .then(() => {
        return _gqlClient;
      });
  } else {
    return _gqlClient;
  }

};