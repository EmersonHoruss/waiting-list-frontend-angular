import { ISubException } from './ISubException';

export interface IException {
  timestamp: Date;
  message: string;
  path: string;
  errors: ISubException[];
}
