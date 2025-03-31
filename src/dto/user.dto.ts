export interface User {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  avatar: Image;
  firstName: string;
  lastName: string;
  telephone: string;
  socials: Social[];
  about: About;
}

export interface About {
  title: string;
  content: string;
  summary: string;
  curriculumVitae: CurriculumVitae;
}

export interface CurriculumVitae {
  id: string;
  altText: string;
  cloudinary: Cloudinary;
  filename: string;
  mimeType: string;
  filesize: number;
  createdAt: Date;
  updatedAt: Date;
  url: string;
  width?: number;
  height?: number;
  sizes?: Sizes;
}

export interface Cloudinary {
  public_id: string;
  original_filename: string;
  format: string;
  secure_url: string;
  resource_type: string;
}

export interface Sizes {
  small: Large;
  medium: Large;
  large: Large;
}

export interface Large {
  url: null;
}

export interface Image {
  id: string;
  altText: string;
  cloudinary: Cloudinary;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  createdAt: Date;
  updatedAt: Date;
  sizes: Sizes;
  url: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: CurriculumVitae;
  id: string;
}
