import type { Education } from "../dto/educations.dto";
import { EducationService } from "../services/education.service";

export class EducationController {
  private educationService;

  constructor() {
    this.educationService = new EducationService();
  }

  getByUser(req: Request): Promise<Education[]> {
    return this.educationService.getByUser();
  }
}
