const gqlLifxClient = require('../../index');

describe('allOn', function() {
  it('should turn on all lights', function (done) {
    this.timeout(10000);

    gqlLifxClient()
      .then(client => {
        client.on('newLight', (light) => {
          console.log('NEW LIGHT', light);
          done();
        });
      });
  });
});