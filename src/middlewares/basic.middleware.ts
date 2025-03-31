import { ENV } from "../config/env.config";
import { HTTP_STATUS_CODE } from "../constant";
import { HttpException } from "../exceptions/http.exception";

export async function basicAuthMiddleware(req: Request, next: Function) {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    throw new HttpException(
      "Authorization header missing",
      HTTP_STATUS_CODE.UNAUTHORIZED
    );
  }

  // Decode the Base64-encoded username:password
  const base64Credentials = authHeader.split(" ")[1];
  const credentials = atob(base64Credentials);
  const [username, password] = credentials.split(":");

  if (
    username !== ENV.BASIC_AUTH_USERNAME ||
    password !== ENV.BASIC_AUTH_PASSWORD
  ) {
    throw new HttpException(
      "Invalid credentials",
      HTTP_STATUS_CODE.UNAUTHORIZED
    );
  }

  // If valid, proceed to the next middleware or route handler
  return next(req);
}
