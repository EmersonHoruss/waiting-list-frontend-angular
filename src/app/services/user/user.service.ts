import { Injectable } from '@angular/core';
import { BaseService } from '../../dinosour_library/services/base.service';
import { IUserCreate } from 'src/app/models/entities/user/IUserCreate';
import { IUserShow } from 'src/app/models/entities/user/IUserShow';
import { IUserUpdate } from 'src/app/models/entities/user/IUserUpdate';
import { HttpClient } from '@angular/common/http';
import { EEndpoint } from '../EEndpoint';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<
  IUserCreate,
  IUserShow,
  IUserUpdate
> {
  constructor(httpBoy: HttpClient) {
    super(httpBoy, EEndpoint.users);
  }
}
