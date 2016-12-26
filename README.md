# node-lifx-graphql
a graphql server wrapped around <a href="https://github.com/MariusRumpf/node-lifx">node-lifx</a>

```npm install --save node-lifx-graphql```

create a server file with contents:   

##server.js##
```
require('node-lifx-graphql')();
```

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
