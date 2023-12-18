import { IBaseShow } from '../../../dinosour_library/models/entities/IBaseShow';
import { ERole } from '../role/ERole';

export interface IUserShow extends IBaseShow {
  role: ERole;
  name: string;
  password: string;
}
