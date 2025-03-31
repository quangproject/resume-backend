import { HTTP_STATUS_CODE } from "../constant";
import { HttpException } from "../exceptions/http.exception";

export const httpExceptionFilter = (req: Request, error: any) => {
  const { pathname } = new URL(req.url);

  const statusCode =
    error instanceof HttpException
      ? error.statusCode
      : HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;

  const message =
    error instanceof HttpException
      ? error.getResponse()
      : error.message || "Internal Server Error";

  return new Response(
    JSON.stringify({
      statusCode,
      message,
      timestamp: new Date().toISOString(),
      path: pathname
    }),
    {
      status: statusCode,
      headers: { "Content-Type": "application/json" }
    }
  );
};
