import type { Image } from "./user.dto";

export interface Project {
  id: string;
  projectName: string;
  startDate: Date;
  endDate?: Date | null;
  description: Description[];
  createdAt: Date;
  updatedAt: Date;
  image: Image;
}

export interface Description {
  children: DescriptionChild[];
  type?: string;
}

export interface DescriptionChild {
  text?: string;
  bold?: boolean;
  children?: ChildChild[];
  type?: Type;
}

export interface ChildChild {
  text: string;
}

export enum Type {
  Li = "li"
}
