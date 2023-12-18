import ConstraintType from './EConstraintType';

export default class CConstraint {
  private fieldName!: string;
  private type!: ConstraintType;
  private value!: boolean | number | string;
  private message!: string;
  constructor();
  constructor(
    fieldName: string,
    type: ConstraintType,
    value: boolean | number | string,
    message?: string | null
  );
  constructor(
    fieldName?: string,
    type?: ConstraintType,
    value?: boolean | number | string,
    message?: string
  ) {
    if (fieldName) {
      this.fieldName = fieldName;
    }
    if (type) {
      this.type = type;
    }
    if (value) {
      this.value = value;
    }
    this.message = message ? message : this.getDefaultMessage();
  }
  private getDefaultMessage(): string {
    let message = '';
    switch (this.type) {
      case ConstraintType.required:
        message = `${this.fieldName} es obligatorio`;
        break;
      case ConstraintType.min:
        message = `El mínimo número es ${this.value}`;
        break;
      case ConstraintType.max:
        message = `El máximo número es ${this.value}`;
        break;
      case ConstraintType.minLength:
        message = `El mínimo número de caracteres es ${this.value}`;
        break;
      case ConstraintType.maxLength:
        message = `El máximo número de caracteres es ${this.value}`;
        break;
      case ConstraintType.pattern:
        message = `No es un ${this.fieldName}`;
        break;
      default:
        message = 'Not found message error';
        break;
    }
    return message;
  }
  public setFieldName(fieldName: string): CConstraint {
    this.fieldName = fieldName;
    return this;
  }
  public getType(): ConstraintType {
    return this.type;
  }
  public setType(type: ConstraintType): CConstraint {
    this.type = type;
    return this;
  }
  public getValue(): boolean | number | RegExp {
    if (typeof this.value === 'string') {
      return new RegExp(this.value);
    }
    return this.value;
  }
  public setValue(value: boolean | number | string): CConstraint {
    this.value = value;
    return this;
  }
  public getMessage(): string {
    return this.message;
  }
  public setMessage(message: string): CConstraint {
    this.message = message;
    return this;
  }
  public setDefaultMessage(): CConstraint {
    this.message = this.getDefaultMessage();
    return this;
  }
}
