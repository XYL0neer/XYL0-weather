import { requestLiveWeather } from '../consumer/open_weather_map_consumer.ts';
import { Context } from '../deps.ts';

export async function getLiveWeather(ctx: Context) {
  console.log('Started server on port 8000');
  const { request, response } = ctx;
  const qLon = request.url.searchParams.get('lon');
  const qLat = request.url.searchParams.get('lat');

  if (!qLon || !qLat) {
    response.status = 200;
    response.body = 'Missing a query param. Please provide a value for lon or lat';
    return;
  }

  const lon = parseFloat(qLon);
  const lat = parseFloat(qLat);

  if (isNaN(lon) || isNaN(lat)) {
    response.status = 400;
    response.body = 'Provide numeric values for lon and lat';
    return;
  }
  response.status = 200;
  response.body = await requestLiveWeather(lon, lat);
}
