import ApiConfig from "../config/api.config";
import { ENV } from "../config/env.config";
import { HTTP_STATUS_CODE } from "../constant";
import type { Contact, ContactForm } from "../dto/contact.dto";
import { HttpException } from "../exceptions/http.exception";

export class ContactService {
  private readonly api: ApiConfig;

  constructor() {
    this.api = new ApiConfig(ENV.GATEWAY_URL);
  }

  save(data: ContactForm): Promise<Contact> {
    try {
      return this.api.post<any>(`/cms/contacts`, data);
    } catch (error: any) {
      throw new HttpException(
        error.errors[0].message,
        HTTP_STATUS_CODE.BAD_REQUEST
      );
    }
  }
}
