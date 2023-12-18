import { IBaseUpdate } from '../../../dinosour_library/models/entities/IBaseUpdate';

export interface IInsuranceUpdate extends IBaseUpdate {
  code: string;
  kind: string;
}
