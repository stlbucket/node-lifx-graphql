# node-lifx-graphql
a graphql server wrapped around <a href="https://github.com/MariusRumpf/node-lifx">node-lifx</a>
control your <a href="">lifx</a> bulbs with graphql
use at your own risk.

```npm install --save node-lifx-graphql```

create a server file with contents:   

##server.js##
```
const nlgql = require('node-lifx-graphql');

nlgql.Server();  // will start an express server on 8080 with /graphql endpoint

console.log(nlgql.Schema());  // fold the schema into your own graphql server instead.  maybe this function signature could change?
```

run the server:

```node server.js```

navigate to:

http://localhost:8080/graphql

play with some queries:

```
{
  lifxLights {
    label,
    state {
      color {
      	hue,
        saturation,
        brightness,
        kelvin
      },
    },
    power,
    firmwareInfo {
      signal,
      tx,
      rx
    },
    firmwareVersion {
      majorVersion,
      minorVersion
    },
    hardwareVersion {
      vendorId,
      vendorName,
      version,
      productId,
      productName
    },
    wifiInfo {
      signal,
      tx,
      rx
    },
    wifiVersion{
      majorVersion,
      minorVersion
    }
  }
}
```
```
mutation {
#  startDiscovery
#  stopDiscovery
#  allLightsOn
#  allLightsOff
  allLightsColor(
    hue: 280, 
    saturation: 100, 
    brightness: 40, 
    kelvin: 9000, 
    duration: 5000
  )
}
```
```
mutation {
  setLightColor(
    lightLabel: "light bucket",
    hue: 199,
    saturation: 99,
    brightness: 88,
    kelvin: 8888
  ) {
    color {
      hue,
      brightness,
      saturation,
      kelvin
    },
    power,
    label
  }
}
```
