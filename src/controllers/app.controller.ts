import { AppService } from "../services/app.service";

export class AppController {
  private appService;

  constructor() {
    this.appService = new AppService();
  }

  hello(req: Request): string {
    return this.appService.getHello();
  }
}
