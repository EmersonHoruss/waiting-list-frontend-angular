import { CDialogMessage } from '../models/CDialogMessage';
import { EDialogMessage } from '../models/EDialogMessage';
import { EDialogMessageType } from '../models/EDialogMessageType';
import { getDialogMessageType } from './DDialogMessageType';

const DDialogMessage: { [x: string]: CDialogMessage } = {
  [EDialogMessage.createFailedBecauseWrongForm]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.error))
    .setDescription('El formulario tiene errores.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.createFailedAfterSubmit]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.error))
    .setDescription('Algún error inesperado sucedió.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.createSuccess]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.success))
    .setDescription('sido creado(a) exitosamente.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.updateFailedBecauseWrongForm]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.error))
    .setDescription('El formulario tiene errores.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.updateFailedBecauseNoChangesDone]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.error))
    .setDescription('Realize cambios para poder actualizar.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.updateFailedAfterSubmit]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.error))
    .setDescription('Algún error inesperado sucedió.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.updateSuccess]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.success))
    .setDescription('sido actualizado(a) exitosamente.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.cancelFailedBecauseNoChangesDone]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.error))
    .setDescription(
      'Realize cambios para poder cancelar los cambios realizados.'
    )
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.cancelWarning]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.warning))
    .setTitle('¿Estás seguro de cancelar los cambios realizados?')
    .setDescription(
      'Al aceptar usted perderá todos los últimos cambios, volviendo al último guardado o al estado inicial del formulario.'
    )
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.cancelSuccess]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.success))
    .setDescription('Se han cancelado los últimos cambios exitosamente.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.deleteWarning]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.warning))
    .setTitle('¿Estás seguro de eliminar?')
    .setDescription('Al eliminar no podrás recuperarlo de ninguna manera.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.deleteFailed]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.error))
    .setDescription('Algún error inesperado sucedió.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
  [EDialogMessage.deleteSuccess]: new CDialogMessage()
    .setType(getDialogMessageType(EDialogMessageType.success))
    .setDescription('sido eliminado(a) exitosamente.')
    .setAllowBackdropClose(true)
    .setAllowEscapeClose(true),
} as const;

export const getDialogMessage: (dialog: EDialogMessage) => CDialogMessage = (
  dialog: EDialogMessage
): CDialogMessage => {
  return DDialogMessage[dialog];
};
