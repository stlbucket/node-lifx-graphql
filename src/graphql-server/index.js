const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
require('../gqlLifxClient')();

const app = express();

const defaultQuery = `

# {
#   lifxLights {
#     label,
#     state {
#       color {
#       	hue,
#         saturation,
#         brightness,
#         kelvin
#       },
#     },
#     power,
#     firmwareInfo {
#       signal,
#       tx,
#       rx
#     },
#     firmwareVersion {
#       majorVersion,
#       minorVersion
#     },
#     hardwareVersion {
#       vendorId,
#       vendorName,
#       version,
#       productId,
#       productName
#     },
#     wifiInfo {
#       signal,
#       tx,
#       rx
#     },
#     wifiVersion{
#       majorVersion,
#       minorVersion
#     }
#   }
# }



# mutation {
# 	# startDiscovery
#   # stopDiscovery
#   # allLightsOn
#   # allLightsOff
#   # allLightsColor(
#   #   hue: 280,
#   #   saturation: 100,
#   #   brightness: 40,
#   #   kelvin: 9000,
#   #   duration: 5000
#   # )
#   setLightColor(
#     lightLabel: "light bucket",
#     hue: 199,
#     saturation: 99,
#     brightness: 88,
#     kelvin: 8888
#   ) {
#     color {
#       hue,
#       brightness,
#       saturation,
#       kelvin
#     },
#     power,
#     label
#   }
# }
`;


app.use('/node-lifx-graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  query: defaultQuery
}));

app.listen(8080);


