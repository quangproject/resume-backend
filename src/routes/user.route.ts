import { API_METHODS, HTTP_STATUS_CODE } from "../constant";
import { UserController } from "../controllers/user.controller";
import { HttpException } from "../exceptions/http.exception";
import { basicAuthMiddleware } from "../middlewares/basic.middleware";

export async function userRoutes(req: Request) {
  return basicAuthMiddleware(req, () => {
    const { method } = req;

    const userController = new UserController();

    if (method === API_METHODS.GET) {
      return userController.getUserInfo(req);
    }

    throw new HttpException(
      "Method Not Allowed",
      HTTP_STATUS_CODE.METHOD_NOT_ALLOWED
    );
  });
}
