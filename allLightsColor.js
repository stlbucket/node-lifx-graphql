const gqlLifxClient = require('./src/gqlLifxClient');
const xform = require('./src/xform/allLightsColor');

gqlLifxClient()
  .then(client => {
    client.on('newLight', (light) => {
      const c = {
              name: 'blue',
              hue: 240,
              saturation: 100,
              brightness: 40,
              kelvin: 9000,
              duration: 1000
            };

      xform(c.hue, c.saturation, c.brightness, c.kelvin, c.duration)
        .then(result => {
          console.log('result', result);
          process.exit();
        });
    });
  });
