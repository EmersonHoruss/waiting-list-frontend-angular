import { IBaseShow } from '../../../dinosour_library/models/entities/IBaseShow';
import { EAppointmentState } from '../appointmentState/EAppointmentState';
import { IPatientShow } from '../patient/IPatientShow';
import { EService } from '../service/EService';

export interface IAppointmentShow extends IBaseShow {
  service: EService;
  state: EAppointmentState;
  patient: IPatientShow;
}
