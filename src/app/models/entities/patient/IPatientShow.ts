import { IBaseShow } from '../../../dinosour_library/models/entities/IBaseShow';
import { EGender } from '../gender/EGender';
import { IInsuranceShow } from '../insurance/IInsuranceShow';
import { ERelationShipType } from '../relationshipType/ERelationshipType';

export interface IPatientShow extends IBaseShow {
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
  insurance?: IInsuranceShow;
}
