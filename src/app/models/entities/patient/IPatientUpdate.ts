import { IBaseUpdate } from '../../../dinosour_library/models/entities/IBaseUpdate';
import { EGender } from '../gender/EGender';
import { ERelationShipType } from '../relationshipType/ERelationshipType';

export interface IPatientUpdate extends IBaseUpdate {
  document: string;
  hc?: string;
  name: string;
  birthdate: Date;
  gender?: EGender;
  phone?: string;
  cell?: string;
  RelationshipType?: ERelationShipType;
  casAffiliation?: string;
  ubigeo?: string;
  idInsurance?: number;
}
