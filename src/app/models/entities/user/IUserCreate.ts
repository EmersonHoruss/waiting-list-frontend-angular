import { IBaseCreate } from '../../../dinosour_library/models/entities/IBaseCreate';
import { ERole } from '../role/ERole';

export interface IUserCreate extends IBaseCreate {
  name: string;
  role: ERole;
  password: string;
}
