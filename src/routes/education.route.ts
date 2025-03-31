import { API_METHODS, HTTP_STATUS_CODE } from "../constant";
import { EducationController } from "../controllers/education.controller";
import { HttpException } from "../exceptions/http.exception";
import { basicAuthMiddleware } from "../middlewares/basic.middleware";

export async function educationRoutes(req: Request) {
  return basicAuthMiddleware(req, () => {
    const { method } = req;
    const educationController = new EducationController();

    if (method === API_METHODS.GET) {
      return educationController.getByUser(req);
    }

    throw new HttpException(
      "Method Not Allowed",
      HTTP_STATUS_CODE.METHOD_NOT_ALLOWED
    );
  });
}
