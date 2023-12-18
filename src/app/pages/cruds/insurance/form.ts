import CConstraint from 'src/app/dinosour_library/dinosour_form/models/CConstraint';
import { CFormBody } from 'src/app/dinosour_library/dinosour_form/models/CFormBody';
import { CInput } from 'src/app/dinosour_library/dinosour_form/models/CInput';
import ConstraintType from 'src/app/dinosour_library/dinosour_form/models/EConstraintType';
import { EInputType } from 'src/app/dinosour_library/dinosour_form/models/EInputType';
const title: string = 'Seguros';
const kindConstraints: CConstraint[] = [
  new CConstraint().setType(ConstraintType.required).setValue(true),
  new CConstraint().setType(ConstraintType.maxLength).setValue(45),
];
const kind: CInput = new CInput()
  .setLabel('Tipo')
  .setPropertyBackend('kind')
  .setType(EInputType.input)
  .setConstraints(kindConstraints)
  .setPlaceholder('Pensionista')
  .setAutofocus(true);
const codeConstraints: CConstraint[] = [
  new CConstraint().setType(ConstraintType.required).setValue(true),
  new CConstraint().setType(ConstraintType.minLength).setValue(1),
  new CConstraint().setType(ConstraintType.maxLength).setValue(3),
];
const code: CInput = new CInput()
  .setLabel('Código')
  .setPropertyBackend('code')
  .setType(EInputType.input)
  .setConstraints(codeConstraints)
  .setPlaceholder('7')
  .setAutofocus(false);
const inputs: CInput[] = [kind, code];
export const form: CFormBody = new CFormBody(title, inputs);
