import { IBaseShow } from '../../../dinosour_library/models/entities/IBaseShow';

export interface IInsuranceShow extends IBaseShow {
  code: string;
  kind: string;
}
