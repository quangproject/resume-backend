import { API_METHODS, HTTP_STATUS_CODE } from "../constant";
import { AppController } from "../controllers/app.controller";
import { HttpException } from "../exceptions/http.exception";
import { basicAuthMiddleware } from "../middlewares/basic.middleware";

export async function appRoutes(req: Request) {
  return basicAuthMiddleware(req, () => {
    const { method } = req;
    const { pathname } = new URL(req.url);

    const pathParts = pathname.split("/").filter((part) => part);
    const appController = new AppController();

    if (method === API_METHODS.GET && pathParts.includes("hello")) {
      return appController.hello(req);
    }

    throw new HttpException(
      "Method Not Allowed",
      HTTP_STATUS_CODE.METHOD_NOT_ALLOWED
    );
  });
}
