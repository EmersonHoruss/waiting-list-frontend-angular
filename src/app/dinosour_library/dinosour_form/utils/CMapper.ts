import { CFormBody } from '../models/CFormBody';
import { CInput } from '../models/CInput';
import { EInputDataType } from '../models/EInputDataType';

export class CMapper {
  public static map(
    bodyForm: CFormBody,
    valuesForm: { [x: string]: string }
  ): { [x: string]: string | boolean | number | null } {
    const obj: { [x: string]: string | boolean | number | null } = {};
    bodyForm.getInputs().forEach((input: CInput) => {
      const label: string = input.getLabel();
      const existProperty: boolean = valuesForm.hasOwnProperty(label);
      if (existProperty) {
        const propertyBackend: string = input.getPropertyBackend();
        const valueString = valuesForm[label];
        const value: string | boolean | number | null =
          input.getDataType() === EInputDataType.boolean
            ? Boolean(valueString)
            : input.getDataType() === EInputDataType.null
            ? null
            : input.getDataType() === EInputDataType.number
            ? Number(valueString)
            : input.getDataType() === EInputDataType.string
            ? valueString
            : null;
        obj[propertyBackend] = value;
      }
    });
    return obj;
  }
}
