import { CFormBody } from '../../dinosour_form/models/CFormBody';
import { CInput } from '../../dinosour_form/models/CInput';
import { EInputType } from '../../dinosour_form/models/EInputType';
import { EFilter } from '../models/EFilter';

const inputKindFilter: CInput = new CInput()
  .setLabel(EFilter.kindFilter)
  .setPlaceholder('Seleccione un tipo de filtro')
  .setAutofocus(false)
  .setType(EInputType.select);
const inputValueFilter: CInput = new CInput()
  .setLabel(EFilter.valueFilter)
  .setPlaceholder('Ingrese el valor del filtro')
  .setAutofocus(true)
  .setType(EInputType.input);
export const DFilterClassic: CFormBody = new CFormBody()
  .addInput(inputKindFilter)
  .addInput(inputValueFilter)
  .setClazz('flex flex-row gap-4')
  .setTitleHidden(true);
