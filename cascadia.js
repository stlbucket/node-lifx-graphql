const gqlLifxClient = require('./src/gqlLifxClient');



gqlLifxClient()
  .then(client => {
    client.on('newLight', (light) => {

      const colors = [
        {
          name: 'blue',
          hue: 228,
          saturation: 100,
          brightness: 40,
          kelvin: 8000,
          duration: 2000
        },
        {
          name: 'green',
          hue: 122,
          saturation: 100,
          brightness: 40,
          kelvin: 8000,
          duration: 2000
        },
        {
          name: 'white',
          hue: 170,
          saturation: 68,
          brightness: 40,
          kelvin: 8000,
          duration: 2000
        }
      ];
      let count = colors.length;

      gqlLifxClient().allLightsOn()
        .then(() => {
          setInterval(() => {
            const c = colors[(count % colors.length)];
            console.log('========================', c.name);//, result);

            gqlLifxClient().allLightsColor(c.hue, c.saturation, c.brightness, c.kelvin, c.duration)
              .then(result => {
                count++;
                console.log('========================');//, result);
              });
          }, 2200);
        })
    });
  });
