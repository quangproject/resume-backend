import { serve } from "bun";
import { appRouter } from "./routes";
import { ENV } from "./config/env.config";
import { logInfo } from "./utils/logger";
import { transformInterceptor } from "./interceptors/transform.interceptor";

const port = Number(ENV.PORT);

serve({
  port: port,
  fetch: transformInterceptor((req: Request) => {
    return appRouter(req);
  })
});

logInfo(`Server running at http://localhost:${port}`);
