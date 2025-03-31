import { API_METHODS, HTTP_STATUS_CODE } from "../constant";
import { SkillController } from "../controllers/skill.controller";
import { HttpException } from "../exceptions/http.exception";
import { basicAuthMiddleware } from "../middlewares/basic.middleware";

export async function skillRoutes(req: Request) {
  return basicAuthMiddleware(req, () => {
    const { method } = req;
    const skillController = new SkillController();

    if (method === API_METHODS.GET) {
      return skillController.getByUser(req);
    }

    throw new HttpException(
      "Method Not Allowed",
      HTTP_STATUS_CODE.METHOD_NOT_ALLOWED
    );
  });
}
