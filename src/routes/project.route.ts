import { API_METHODS, HTTP_STATUS_CODE } from "../constant";
import { ProjectController } from "../controllers/project.controller";
import { HttpException } from "../exceptions/http.exception";
import { basicAuthMiddleware } from "../middlewares/basic.middleware";

export async function projectRoutes(req: Request) {
  return basicAuthMiddleware(req, () => {
    const { method } = req;
    const projectController = new ProjectController();

    if (method === API_METHODS.GET) {
      return projectController.getByUser(req);
    }

    throw new HttpException(
      "Method Not Allowed",
      HTTP_STATUS_CODE.METHOD_NOT_ALLOWED
    );
  });
}
