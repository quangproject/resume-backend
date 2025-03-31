import { HTTP_STATUS_CODE } from "../constant";
import { HttpException } from "../exceptions/http.exception";
import { appRoutes } from "./app.route";
import { contactRoutes } from "./contact.route";
import { educationRoutes } from "./education.route";
import { projectRoutes } from "./project.route";
import { skillRoutes } from "./skill.route";
import { userRoutes } from "./user.route";
import { workExperienceRoutes } from "./work-experience.route";

export function appRouter(req: Request) {
  const { pathname } = new URL(req.url);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    throw new HttpException(
      "CORS preflight request",
      HTTP_STATUS_CODE.NO_CONTENT
    );
  }

  // if (pathname === "/") {
  //   return "Resume Backend API";
  // }

  if (pathname.startsWith("/api/app")) {
    return appRoutes(req);
  }

  if (pathname.startsWith("/api/users")) {
    return userRoutes(req);
  }

  if (pathname.startsWith("/api/educations")) {
    return educationRoutes(req);
  }

  if (pathname.startsWith("/api/projects")) {
    return projectRoutes(req);
  }

  if (pathname.startsWith("/api/skills")) {
    return skillRoutes(req);
  }

  if (pathname.startsWith("/api/work-experiences")) {
    return workExperienceRoutes(req);
  }

  if (pathname.startsWith("/api/contacts")) {
    return contactRoutes(req);
  }

  throw new HttpException("Path not found", HTTP_STATUS_CODE.NOT_FOUND);
}
