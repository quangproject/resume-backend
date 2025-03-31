export interface WorkExperience {
  id: string;
  companyName: string;
  jobTitle: string;
  location: string;
  startDate: Date;
  endDate?: Date | null;
  description: Description[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Description {
  children: DescriptionChild[];
  type: string;
}

export interface DescriptionChild {
  children: ChildChild[];
  type: string;
}

export interface ChildChild {
  text: string;
}
