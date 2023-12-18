import { Injectable } from '@angular/core';
import { BaseService } from '../../dinosour_library/services/base.service';
import { IAppointmentCreate } from 'src/app/models/entities/appointment/IAppointmetCreate';
import { IAppointmentShow } from 'src/app/models/entities/appointment/IAppointmentShow';
import { IAppointmentUpdate } from 'src/app/models/entities/appointment/IAppointmentUpdate';
import { HttpClient } from '@angular/common/http';
import { EEndpoint } from '../EEndpoint';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService extends BaseService<
  IAppointmentCreate,
  IAppointmentShow,
  IAppointmentUpdate
> {
  constructor(http: HttpClient) {
    super(http, EEndpoint.appointments);
  }
}
