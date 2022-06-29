import { Drash } from "./deps.ts";
import WeatherResource from "./resources/weather_resource.ts";
import dexter from "./service/dexter_service.ts";

const server = new Drash.Server(
  {
    hostname: "localhost",
    port: 8080,
    protocol: "http",
    resources: [WeatherResource],
    services: [dexter],
  },
);

server.run();
console.log(`Server running at ${server.address}`);
