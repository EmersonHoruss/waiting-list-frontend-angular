import { IBaseCreate } from '../../../dinosour_library/models/entities/IBaseCreate';

export interface IInsuranceCreate extends IBaseCreate {
  code: string;
  kind: string;
}
