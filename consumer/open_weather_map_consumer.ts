import { OPEN_WEATHER_MAP_API_KEY } from '../deps.ts';
const url = 'https://api.openweathermap.org/data/2.5/weather';

export async function requestLiveWeather(lon: number, lat: number) {
  const response = await fetch(
    `${url}?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric`,
  );
  return await response.json();
}
