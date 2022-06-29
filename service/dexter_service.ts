import { DexterService } from "../deps.ts";

const dexter = new DexterService({
  enabled: true,
  datetime: true,
  method: true,
  url: true,
  response_time: true,
  level: "debug",
  tag_string: "{url} | ",
});

export default dexter;
