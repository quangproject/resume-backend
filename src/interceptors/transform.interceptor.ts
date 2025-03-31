import { HTTP_STATUS_CODE } from "../constant";
import { httpExceptionFilter } from "../filters/http-exception.filter";

const allowedOrigins = ["http://localhost:5173", "https://resume.ndquang.tech"];

export const transformInterceptor = (
  handler: (req: Request) => Promise<Response>
) => {
  return async (req: Request) => {
    try {
      const origin = req.headers.get("origin");

      // Check if origin is allowed
      const corsHeaders: Record<string, string> = {
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      };

      if (origin && allowedOrigins.includes(origin)) {
        corsHeaders["Access-Control-Allow-Origin"] = origin;
      }

      const response = await handler(req);

      return new Response(
        JSON.stringify({
          success: true,
          data: response,
          timestamp: new Date().toISOString()
        }),
        {
          status: HTTP_STATUS_CODE.OK,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        }
      );
    } catch (error) {
      return httpExceptionFilter(req, error);
    }
  };
};
