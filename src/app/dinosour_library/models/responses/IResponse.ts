import { IPageable } from './IPageable';
import { ISort } from './ISort';

export interface IResponse<T> {
  content: T | T[];
  pageable: IPageable;
  sort: ISort;
  query: string;
}
