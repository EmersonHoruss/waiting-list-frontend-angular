import { IBaseCreate } from '../../../dinosour_library/models/entities/IBaseCreate';
import { EAppointmentState } from '../appointmentState/EAppointmentState';
import { EService } from '../service/EService';

export interface IAppointmentCreate extends IBaseCreate {
  service: EService;
  state: EAppointmentState;
  idPatient: number;
}
