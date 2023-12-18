import CConstraint from 'src/app/dinosour_library/dinosour_form/models/CConstraint';
import { CFormBody } from 'src/app/dinosour_library/dinosour_form/models/CFormBody';
import { CInput } from 'src/app/dinosour_library/dinosour_form/models/CInput';
import { CItemSelect } from 'src/app/dinosour_library/dinosour_form/models/CItemSelect';
import ConstraintType from 'src/app/dinosour_library/dinosour_form/models/EConstraintType';
import { EInputType } from 'src/app/dinosour_library/dinosour_form/models/EInputType';
import { ERole } from 'src/app/models/entities/role/ERole';

const title: string = 'Usuarios';
const nameConstraints: CConstraint[] = [
  new CConstraint().setType(ConstraintType.required).setValue(true),
  new CConstraint().setType(ConstraintType.maxLength).setValue(45),
];
const nameInput: CInput = new CInput()
  .setLabel('Nombre')
  .setPropertyBackend("name")
  .setType(EInputType.input)
  .setConstraints(nameConstraints)
  .setPlaceholder('Ricardo Gareca')
  // .setAutofocus(true);
const roleConstraints: CConstraint[] = [
  new CConstraint().setType(ConstraintType.required).setValue(true),
];
const roleData: CItemSelect[] = Object.entries(ERole).map(
  ([key, value]: [string, ERole]) => new CItemSelect(value, value)
);
const roleInput: CInput = new CInput()
  .setLabel('Rol')
  .setPropertyBackend("role")
  .setType(EInputType.select)
  .setConstraints(roleConstraints)
  .setPlaceholder(ERole.admin)
  .setData(roleData);
const passwordConstraints: CConstraint[] = [
  new CConstraint().setType(ConstraintType.required).setValue(true),
  new CConstraint().setType(ConstraintType.maxLength).setValue(45),
];
const passwordInput: CInput = new CInput()
  .setLabel('Contraseña')
  .setPropertyBackend("password")
  .setType(EInputType.input)
  .setConstraints(passwordConstraints)
  .setPlaceholder('rgareca56¬');
const inputs: CInput[] = [nameInput, roleInput, passwordInput];
export const form: CFormBody = new CFormBody(title, inputs);
