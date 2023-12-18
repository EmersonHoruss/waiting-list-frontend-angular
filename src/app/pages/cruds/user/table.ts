import { CColumn } from 'src/app/dinosour_library/dinosour_table/models/CColumn';
import { CTableBody } from 'src/app/dinosour_library/dinosour_table/models/CTableBody';
import { EColumnType } from 'src/app/dinosour_library/dinosour_table/models/EColumnType';

const roleColumn = new CColumn()
  .setName('role')
  .setType(EColumnType.string)
  .setDisplayed('Rol');
const nameColumn = new CColumn()
  .setName('name')
  .setType(EColumnType.string)
  .setDisplayed('Nombre');
const passwordColumn = new CColumn()
  .setName('password')
  .setType(EColumnType.string)
  .setDisplayed('Constraseña');
export const table = new CTableBody()
  .addColumn(roleColumn)
  .addColumn(nameColumn)
  .addColumn(passwordColumn)
  .setStickyHeader(true)
  .setEnableIndexes(true)
  .setEnableCrudActions(true);
