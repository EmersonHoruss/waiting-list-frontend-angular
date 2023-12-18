import { IBaseUpdate } from '../../../dinosour_library/models/entities/IBaseUpdate';
import { ERole } from '../role/ERole';

export interface IUserUpdate extends IBaseUpdate {
  role: ERole;
  name: string;
  password: string;
}
