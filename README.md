# node-lifx-graphql
a graphql server wrapped around <a href="https://github.com/MariusRumpf/node-lifx">node-lifx</a></br>
control your <a href="http://www.lifx.com/">lifx</a> bulbs with <a href="https://github.com/graphql/graphql-js">graphql</a></br>
use at your own risk.</br>

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

<a href="http://localhost:8080/node-lifx-graphql">http://localhost:8080/node-lifx-graphql</a>

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
    lightLabel: "[YOUR LIGHT NAME]",
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
