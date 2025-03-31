export interface Contact {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactForm {
  person: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
}
