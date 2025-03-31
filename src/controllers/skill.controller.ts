import type { Skill } from "../dto/skill.dto";
import { SkillService } from "../services/skill.service";

export class SkillController {
  private skillService;

  constructor() {
    this.skillService = new SkillService();
  }

  getByUser(req: Request): Promise<Skill[]> {
    return this.skillService.getByUser();
  }
}
