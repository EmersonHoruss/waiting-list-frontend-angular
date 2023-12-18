import { IBaseCreate } from '../../../dinosour_library/models/entities/IBaseCreate';
import { EGender } from '../gender/EGender';
import { ERelationShipType } from '../relationshipType/ERelationshipType';

export interface IPatientCreate extends IBaseCreate {
  document: string;
  name: string;
  birthdate: Date;
  hc?: string;
  gender?: EGender;
  phone?: string;
  cell?: string;
  relationshipType?: ERelationShipType;
  casAffiliation?: string;
  ubigeo?: string;
  idInsurance?: number;
}
