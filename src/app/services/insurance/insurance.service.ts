import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../dinosour_library/services/base.service';
import { IInsuranceCreate } from 'src/app/models/entities/insurance/IInsuranceCreate';
import { IInsuranceShow } from 'src/app/models/entities/insurance/IInsuranceShow';
import { IInsuranceUpdate } from 'src/app/models/entities/insurance/IInsuranceUpdate';
import { EEndpoint } from '../EEndpoint';

@Injectable({
  providedIn: 'root',
})
export class InsuranceService extends BaseService<
  IInsuranceCreate,
  IInsuranceShow,
  IInsuranceUpdate
> {
  constructor(http: HttpClient) {
    super(http, EEndpoint.insurances);
  }
}
