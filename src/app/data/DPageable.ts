import { ESort } from '../dinosour_library/models/requests/ESort';
import { IPageable } from '../dinosour_library/models/requests/IPageable';

export const DPageable: IPageable = {
  page: 0,
  size: 10,
  sort: [`id,${ESort.asc}`],
};
