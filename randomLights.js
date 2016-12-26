const gqlLifxClient = require('./src/gqlLifxClient');


gqlLifxClient()
  .then(client => {
    client.on('newLight', (light) => {
      setInterval(() => {
        gqlLifxClient().allLightsRandomColor()
          .then(result => {
            console.log('result', result);
          });
      }, 4000);
    });
  });
