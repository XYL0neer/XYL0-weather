export * as Drash from "https://deno.land/x/drash@v2.6.0/mod.ts";
export { DexterService } from "https://deno.land/x/drash@v2.6.0/src/services/dexter/dexter.ts";
import { config } from "https://deno.land/std@0.145.0/dotenv/mod.ts";

export const { OPEN_WEATHER_MAP_API_KEY } = await config({ safe: true });
