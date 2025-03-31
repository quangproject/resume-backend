import { API_METHODS, HTTP_STATUS_CODE } from "../constant";
import { ContactController } from "../controllers/contact.controller";
import { HttpException } from "../exceptions/http.exception";
import { basicAuthMiddleware } from "../middlewares/basic.middleware";

export async function contactRoutes(req: Request) {
  return basicAuthMiddleware(req, () => {
    const { method } = req;

    const contactController = new ContactController();

    if (method === API_METHODS.POST) {
      return contactController.save(req);
    }

    throw new HttpException(
      "Method Not Allowed",
      HTTP_STATUS_CODE.METHOD_NOT_ALLOWED
    );
  });
}
