import { Injectable } from '@angular/core';
import { BaseService } from '../../dinosour_library/services/base.service';
import { IPatientCreate } from 'src/app/models/entities/patient/IPatientCreate';
import { IPatientUpdate } from 'src/app/models/entities/patient/IPatientUpdate';
import { IPatientShow } from 'src/app/models/entities/patient/IPatientShow';
import { HttpClient } from '@angular/common/http';
import { EEndpoint } from '../EEndpoint';

@Injectable({
  providedIn: 'root',
})
export class PatientService extends BaseService<
  IPatientCreate,
  IPatientShow,
  IPatientUpdate
> {
  constructor(http: HttpClient) {
    super(http, EEndpoint.patients);
  }
}
