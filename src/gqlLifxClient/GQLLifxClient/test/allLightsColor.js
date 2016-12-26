const gqlLifxClient = require('../../index');

describe.only('allLightsColor - randomly generated but called directly', function() {
  it('should color all lights', function (done) {
    this.timeout(10000);

    gqlLifxClient()
      .then(client => {
        client.on('newLight', (light) => {
          const hue = Math.random() * 100;
          const saturation = Math.random() * 40 + 40;
          const brightness = 50;
          const kelvin = 2000;
          const duration = 1500;

          client.allLightsColor(hue, saturation, brightness, kelvin, duration)
            .then(result => {
              console.log('result', result);
              done();
            });
        });
      });
  });
});