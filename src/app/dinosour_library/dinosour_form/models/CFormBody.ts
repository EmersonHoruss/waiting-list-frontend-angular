import { cloneDeep } from 'lodash';
import { CInput } from './CInput';
import { EIdentifier } from './EIdentifier';
import { EInputType } from './EInputType';

export class CFormBody {
  private title: string;
  private inputs: CInput[];
  private titleHidden: boolean;
  private inputsHidden: boolean;
  private clazz: string;
  constructor(title: string = '', inputs: CInput[] = []) {
    this.title = title;
    this.inputs = inputs;
    this.titleHidden = false;
    this.inputsHidden = false;
    this.clazz = 'flex flex-col';
  }
  public getTitle(): string {
    return this.title;
  }
  public getInputs(): CInput[] {
    return this.inputs;
  }
  public getInputByLabel(label: string): CInput | null {
    return (
      this.inputs.find((input: CInput) => input.getLabel() === label) ?? null
    );
  }
  public setInputs(inputs: CInput[]): CFormBody {
    this.inputs = inputs;
    return this;
  }
  public addInput(input: CInput): CFormBody {
    this.inputs.push(input);
    return this;
  }
  public getTitleHidden(): boolean {
    return this.titleHidden;
  }
  public setTitleHidden(titleHidden: boolean): CFormBody {
    this.titleHidden = titleHidden;
    return this;
  }
  public setInputsHidden(inputsHidden: boolean): CFormBody {
    this.inputsHidden = inputsHidden;
    return this;
  }
  public getInputsHidden(): boolean {
    return this.inputsHidden;
  }
  public shouldCreate(): boolean {
    const isCreated = !!this.inputs.find(
      (input: CInput) =>
        input.getType() === EInputType.identifier && input.getValue()
    );
    return !isCreated;
  }
  public updateByLabel(values: { [x: string]: string }): void {
    for (const input of this.inputs) {
      const label: string = input.getLabel();
      input.setValue(values[label]);
    }
  }
  public updateByBackendProperty(values: { [x: string]: string }): void {
    for (const input of this.inputs) {
      const propertyBackend: string = input.getPropertyBackend();
      input.setValue(values[propertyBackend]);
    }
  }
  public isDifferent(values: { [x: string]: string }): boolean {
    for (const input of this.inputs) {
      const label: string = input.getLabel();
      const value: string = values[label];
      if (value != input.getValue()) {
        return true;
      }
    }
    return false;
  }
  public getClazz(): string {
    return this.clazz;
  }
  public setClazz(clazz: string): CFormBody {
    this.clazz = clazz;
    return this;
  }
}
