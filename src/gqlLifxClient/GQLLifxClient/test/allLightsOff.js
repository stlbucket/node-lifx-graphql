const gqlLifxClient = require('../../index');

describe('allOff', function() {
  it('should turn off all lights', function (done) {
    this.timeout(10000);
    gqlLifxClient()
      .then(client => {
        client.on('newLight', (light) => {
          console.log('oy', light);
          client.allLightsOff()
            .then(result => {
              console.log('result', result);
              done();
            });
        });
      });
  });
});