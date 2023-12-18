import { IPage } from './IPage';

export interface IPageable {
  page: IPage;
  totalPages: number;
  totalElements: number;
}
