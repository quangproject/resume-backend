import ApiConfig from "../config/api.config";
import { ENV } from "../config/env.config";
import { HTTP_STATUS_CODE } from "../constant";
import type { User } from "../dto/user.dto";
import { HttpException } from "../exceptions/http.exception";

export class UserService {
  private readonly api: ApiConfig;

  constructor() {
    this.api = new ApiConfig(ENV.GATEWAY_URL);
  }

  getUserInfo(): Promise<User> {
    try {
      return this.api.get<User>(`/cms/users/${ENV.USER_ID}`);
    } catch (error: any) {
      throw new HttpException(
        error.errors[0].message,
        HTTP_STATUS_CODE.NOT_FOUND
      );
    }
  }
}
