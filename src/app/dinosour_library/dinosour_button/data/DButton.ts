import { CButton } from '../models/CButton';
import { EButtonColor } from '../models/EButtonColor';
import { EButtonType } from '../models/EButtonType';

export const DButtonCreate = new CButton()
  .setName('Crear')
  .setColor(EButtonColor.primary)
  .setType(EButtonType.flat);
export const DButtonUpdate = new CButton()
  .setName('Actualizar')
  .setColor(EButtonColor.primary)
  .setType(EButtonType.flat);
export const DButtonCancel = new CButton()
  .setName('Cancel')
  .setColor(EButtonColor.primary)
  .setType(EButtonType.stroked);
export const DButtonOk = new CButton()
  .setName('Ok')
  .setColor(EButtonColor.primary)
  .setType(EButtonType.flat);
export const DButtonAccept = new CButton()
  .setName('Aceptar')
  .setColor(EButtonColor.primary)
  .setType(EButtonType.flat);
export const DButtonYes = new CButton()
  .setName('Sí')
  .setColor(EButtonColor.primary)
  .setType(EButtonType.flat);
export const DButtonNo = new CButton()
  .setName('No')
  .setColor(EButtonColor.primary)
  .setType(EButtonType.stroked);
export const DButtonX = new CButton()
  .setIcon('close')
  .setType(EButtonType.icon);
export const DButtonClean = new CButton()
  .setIcon('cleaning_services')
  .setType(EButtonType.icon)
  .setColor(EButtonColor.primary);
export const DButtonDelete = new CButton()
  .setName('Eliminar')
  .setColor(EButtonColor.warn)
  .setType(EButtonType.stroked);
export const DButtonEdit = new CButton()
  .setName('Editar')
  .setColor(EButtonColor.primary)
  .setType(EButtonType.flat);
export const DButtonFilter = new CButton()
  .setName('Filtrar')
  .setIcon('search')
  .setColor(EButtonColor.primary)
  .setType(EButtonType.icon);
