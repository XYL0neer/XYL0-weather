import { OPEN_WEATHER_MAP_API_KEY } from "../deps.ts";
const url = "https://api.openweathermap.org/data/2.5/weather";

export default class OpenWeatherMapConsumer {
  private OWM_API_KEY: string;

  constructor() {
    this.OWM_API_KEY = OPEN_WEATHER_MAP_API_KEY;
  }

  public async getWeather(lon: number, lat: number) {
    const response = await fetch(
      `${url}?lat=${lat}&lon=${lon}&appid=${this.OWM_API_KEY}&units=metric`,
    );
    return await response.json();
  }
}
