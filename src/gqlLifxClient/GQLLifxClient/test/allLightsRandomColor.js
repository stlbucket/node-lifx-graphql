const gqlLifxClient = require('../../index');

describe.only('allLightsRandomColor', function() {
  it('should color all lights', function (done) {
    this.timeout(10000);

    gqlLifxClient()
      .then(client => {
        client.on('newLight', (light) => {
          client.allLightsRandomColor()
            .then(result => {
              console.log('result', result);
              done();
            });
        });
      });
  });
});