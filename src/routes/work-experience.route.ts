import { API_METHODS, HTTP_STATUS_CODE } from "../constant";
import { WorkExperienceController } from "../controllers/work-experience.controller";
import { HttpException } from "../exceptions/http.exception";
import { basicAuthMiddleware } from "../middlewares/basic.middleware";

export async function workExperienceRoutes(req: Request) {
  return basicAuthMiddleware(req, () => {
    const { method } = req;
    const workExpericenceController = new WorkExperienceController();

    if (method === API_METHODS.GET) {
      return workExpericenceController.getByUser(req);
    }

    throw new HttpException(
      "Method Not Allowed",
      HTTP_STATUS_CODE.METHOD_NOT_ALLOWED
    );
  });
}
