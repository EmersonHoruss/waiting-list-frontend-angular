import { Type } from 'class-transformer';
import CConstraint from './CConstraint';
import EConstraintType from './EConstraintType';
import { EInputType } from './EInputType';
import { CItemSelect } from './CItemSelect';
import { EInputDataType } from './EInputDataType';

export class CInput {
  private label!: string;
  private propertyBackend!: string;
  private value!: string;
  private type!: EInputType;
  private dataType!: EInputDataType;
  @Type(() => CConstraint)
  private constraints!: CConstraint[];
  private placeholder?: string;
  private autofocus?: boolean;
  private readOnly?: boolean;
  private data?: CItemSelect[];
  constructor() {
    this.label = '';
    this.propertyBackend = '';
    this.value = '';
    this.type = EInputType.input;
    this.dataType = EInputDataType.string;
    this.placeholder = '';
    this.constraints = [];
    this.autofocus = false;
    this.readOnly = false;
    this.data = [];
  }
  public getLabel(): string {
    return this.label;
  }
  public setLabel(label: string): CInput {
    this.label = label;
    return this;
  }
  public getPropertyBackend(): string {
    return this.propertyBackend;
  }
  public setPropertyBackend(propertyBackend: string): CInput {
    this.propertyBackend = propertyBackend;
    return this;
  }
  public getValue(): string {
    return this.value;
  }
  public setValue(value: string): CInput {
    this.value = value;
    return this;
  }
  public getType(): EInputType {
    return this.type ?? EInputType.input;
  }
  public setType(type: EInputType): CInput {
    this.type = type;
    return this;
  }
  public getDataType(): EInputDataType {
    return this.dataType;
  }
  public setDataType(dataType: EInputDataType): CInput {
    this.dataType = dataType;
    return this;
  }
  public getConstraints(): CConstraint[] {
    return this.constraints;
  }
  public setConstraints(constraints: CConstraint[]): CInput {
    this.constraints = constraints.map(
      (constraint: CConstraint): CConstraint =>
        constraint.setFieldName(this.getLabel()).setDefaultMessage()
    );
    return this;
  }
  public getPlaceholder(): string {
    return this.placeholder ?? '';
  }
  public setPlaceholder(placeholder: string): CInput {
    this.placeholder = placeholder;
    return this;
  }
  public getAutofocus(): boolean {
    return this.autofocus ?? false;
  }
  public setAutofocus(autofocus: boolean): CInput {
    this.autofocus = autofocus;
    return this;
  }
  public isReadOnly(): boolean {
    return this.readOnly ?? false;
  }
  public setReadOnly(readOnly: boolean): CInput {
    this.readOnly = readOnly;
    return this;
  }
  public getData(): CItemSelect[] {
    return this.data ?? [];
  }
  public setData(data: CItemSelect[]): CInput {
    this.data = data;
    return this;
  }
  public getMessageConstraint(constraintType: EConstraintType): string {
    const constraint: CConstraint | null =
      this.constraints?.find(
        (constraint: CConstraint) => constraint.getType() === constraintType
      ) ?? null;
    const message = constraint
      ? constraint.getMessage()
      : 'Not Found Constraint';
    return message;
  }
}
