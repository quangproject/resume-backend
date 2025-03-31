import type { ValidationError } from "../type";

export class InputValidator {
  private errors: ValidationError[] = [];

  constructor(private data: Record<string, any>) {}

  required(field: any): InputValidator {
    if (!this.data[field]) {
      this.errors.push({ field, message: `${field} is required.` });
    }
    return this;
  }

  isString(field: string): InputValidator {
    if (typeof this.data[field] !== "string") {
      this.errors.push({ field, message: `${field} must be a string.` });
    }
    return this;
  }

  isArray(field: string): InputValidator {
    if (!Array.isArray(this.data[field]) || this.data[field].length === 0) {
      this.errors.push({ field, message: `${field} must be an array.` });
    }
    return this;
  }

  length(field: string, min: number, max: number): InputValidator {
    const value = this.data[field];
    if (value && (value.length < min || value.length > max)) {
      this.errors.push({
        field,
        message: `${field} must be between ${min} and ${max} characters.`
      });
    }
    return this;
  }

  pattern(field: string, regex: RegExp): InputValidator {
    const value = this.data[field];
    if (value && !regex.test(value)) {
      this.errors.push({ field, message: `${field} is invalid.` });
    }
    return this;
  }

  enum(field: string, validValues: any[]): InputValidator {
    const value = this.data[field];
    if (value && !validValues.includes(value)) {
      this.errors.push({
        field,
        message: `${field} must be one of ${validValues.join(", ")}.`
      });
    }
    return this;
  }

  getErrors(): ValidationError[] {
    return this.errors;
  }

  isValid(): boolean {
    return this.errors.length === 0;
  }
}
