import { Application, Router } from './deps.ts';
import { getLiveWeather } from './resources/weather_resource.ts';

const app = new Application();
const router = new Router();

router.get('/weather/live', getLiveWeather);

// Logging Request
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url.pathname} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

app.use(router.routes());

await app.listen({ port: 8000 });
