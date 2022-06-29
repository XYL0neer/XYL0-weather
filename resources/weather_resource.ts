import OpenWeatherMapConsumer from '../consumer/open_weather_map_consumer.ts';
import { Drash } from '../deps.ts';

export default class WeatherResource extends Drash.Resource {
  public paths = ['/weather/live'];

  public async GET(
    request: Drash.Request,
    response: Drash.Response,
  ): Promise<void> {
    const qLon = request.queryParam('lon');
    const qLat = request.queryParam('lat');

    if (!qLon || !qLat) {
      return response.text('Missing a query param. Please provide a value for lon or lat', 400);
    }

    const lon = parseFloat(qLon);
    const lat = parseFloat(qLat);

    if (isNaN(lon) || isNaN(lat)) {
      return response.text('Provide numeric values for lon and lat', 400);
    }

    const owmConsumer = new OpenWeatherMapConsumer();
    const weatherData = await owmConsumer.getWeather(lon, lat);
    return response.json(weatherData);
  }
}
