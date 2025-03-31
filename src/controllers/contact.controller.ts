import { HTTP_STATUS_CODE } from "../constant";
import type { Contact, ContactForm } from "../dto/contact.dto";
import { HttpException } from "../exceptions/http.exception";
import { ContactService } from "../services/contact.service";
import { InputValidator } from "../utils/validator";

export class ContactController {
  private contactService;

  constructor() {
    this.contactService = new ContactService();
  }

  async save(req: Request): Promise<Contact> {
    if (!req.body) {
      throw new HttpException(
        "Request body is empty",
        HTTP_STATUS_CODE.BAD_REQUEST
      );
    }

    const contactForm: ContactForm = await req.json();
    const validator = new InputValidator(contactForm);

    validator
      .required("person")
      .isString("person")
      .required("fullName")
      .isString("fullName")
      .required("email")
      .pattern("email", /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
      .required("subject")
      .isString("subject")
      .required("message")
      .isString("message");

    if (!validator.isValid()) {
      throw new HttpException(
        JSON.stringify(validator.getErrors()),
        HTTP_STATUS_CODE.BAD_REQUEST
      );
    }

    return this.contactService.save(contactForm);
  }
}
