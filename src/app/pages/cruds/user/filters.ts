import { CKindFilter } from 'src/app/dinosour_library/dinosour_filter/models/CKindFilter';
import { table } from './table';

export const filters: CKindFilter[] = CKindFilter.getFilters(
  table.getColumns()
);
