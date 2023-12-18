import { IBaseUpdate } from '../../../dinosour_library/models/entities/IBaseUpdate';
import { EAppointmentState } from '../appointmentState/EAppointmentState';
import { EService } from '../service/EService';

export interface IAppointmentUpdate extends IBaseUpdate {
  service: EService;
  state: EAppointmentState;
  idPatient: number;
}
