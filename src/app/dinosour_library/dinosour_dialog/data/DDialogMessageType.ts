import {
  DButtonNo,
  DButtonOk,
  DButtonYes,
} from '../../dinosour_button/data/DButton';
import { CDialogMessageType } from '../models/CDialogMessageType';
import { EDialogMessageType } from '../models/EDialogMessageType';

const DDialogMessageType: { [x: string]: CDialogMessageType } = {
  [EDialogMessageType.warning]: new CDialogMessageType()
    .setType(EDialogMessageType.warning)
    .setColor('yellow-500')
    .setName('Alerta')
    .setIcon('warning')
    .setButtons([DButtonNo, DButtonYes]),
  [EDialogMessageType.error]: new CDialogMessageType()
    .setType(EDialogMessageType.error)
    .setColor('red-400')
    .setName('Error')
    .setIcon('report')
    .setButtons([DButtonOk]),
  [EDialogMessageType.success]: new CDialogMessageType()
    .setType(EDialogMessageType.success)
    .setColor('green-400')
    .setName('Éxito')
    .setIcon('check_circle')
    .setButtons([DButtonOk]),
  [EDialogMessageType.info]: new CDialogMessageType()
    .setType(EDialogMessageType.info)
    .setColor('blue-300')
    .setName('Información')
    .setIcon('info')
    .setButtons([DButtonOk]),
  [EDialogMessageType.notFound]: new CDialogMessageType()
    .setType(EDialogMessageType.notFound)
    .setColor('slate-300')
    .setName('Not Found')
    .setButtons([DButtonOk]),
} as const;

export const getDialogMessageType: (
  type: EDialogMessageType
) => CDialogMessageType = (type: EDialogMessageType): CDialogMessageType => {
  return DDialogMessageType[type];
};
