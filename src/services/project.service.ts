import ApiConfig from "../config/api.config";
import { ENV } from "../config/env.config";
import { HTTP_STATUS_CODE } from "../constant";
import type { Project } from "../dto/project.dto";
import { HttpException } from "../exceptions/http.exception";

export class ProjectService {
  private readonly api: ApiConfig;

  constructor() {
    this.api = new ApiConfig(ENV.GATEWAY_URL);
  }

  getByUser(): Promise<Project[]> {
    try {
      return this.api.get<Project[]>(`/cms/projects/${ENV.USER_ID}/user`);
    } catch (error: any) {
      throw new HttpException(
        error.errors[0].message,
        HTTP_STATUS_CODE.BAD_REQUEST
      );
    }
  }
}
