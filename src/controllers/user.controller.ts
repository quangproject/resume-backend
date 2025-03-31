import type { User } from "../dto/user.dto";
import { UserService } from "../services/user.service";

export class UserController {
  private userService;

  constructor() {
    this.userService = new UserService();
  }

  getUserInfo(req: Request): Promise<User> {
    return this.userService.getUserInfo();
  }
}
