export interface Education {
  id: string;
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  createdAt: Date;
  updatedAt: Date;
  description: Description[];
  startDate: Date;
  endDate?: Date | null;
}

export interface Description {
  children: Child[];
}

export interface Child {
  text: string;
}
