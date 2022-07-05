export * from 'https://deno.land/x/oak@v10.6.0/mod.ts';
import { config } from 'https://deno.land/std@0.145.0/dotenv/mod.ts';

export const { OPEN_WEATHER_MAP_API_KEY } = await config({ safe: true });
