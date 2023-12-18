import { DButtonDelete, DButtonEdit } from '../../dinosour_button/data/DButton';
import { CColumn } from '../models/CColumn';
import { EColumnType } from '../models/EColumnType';

export const DColumnIndex = new CColumn()
  .setName(EColumnType.index)
  .setType(EColumnType.index)
  .setDisplayed('#');
export const DColumnButtons = new CColumn()
  .setName(EColumnType.buttons)
  .setType(EColumnType.buttons)
  .setDisplayed('Acciones')
  .setButtons([DButtonEdit, DButtonDelete]);
