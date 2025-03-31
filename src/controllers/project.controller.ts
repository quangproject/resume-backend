import type { Project } from "../dto/project.dto";
import { ProjectService } from "../services/project.service";

export class ProjectController {
  private projectService;

  constructor() {
    this.projectService = new ProjectService();
  }

  getByUser(req: Request): Promise<Project[]> {
    return this.projectService.getByUser();
  }
}
