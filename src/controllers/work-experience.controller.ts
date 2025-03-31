import type { WorkExperience } from "../dto/work-experience.dto";
import { WorkExperienceService } from "../services/work-experience.service";

export class WorkExperienceController {
  private workExpericenceService;

  constructor() {
    this.workExpericenceService = new WorkExperienceService();
  }

  getByUser(req: Request): Promise<WorkExperience[]> {
    return this.workExpericenceService.getByUser();
  }
}
