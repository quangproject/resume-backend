import type { Image } from "./user.dto";

export interface Skill {
  id: string;
  technologyName: string;
  technicalIcon: Image;
  skills: SkillElement[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SkillElement {
  name: string;
  icon: Image;
  id: string;
}
