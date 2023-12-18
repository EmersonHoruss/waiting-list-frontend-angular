import { CDialogLoading } from '../models/CDialogLoading';

const DDialogLoading = new CDialogLoading()
  .setTitle('Procesando...')
  .setAllowBackdropClose(false)
  .setAllowEscapeClose(false);

export const getDialogLoading: () => CDialogLoading = (): CDialogLoading => {
  return DDialogLoading;
};
