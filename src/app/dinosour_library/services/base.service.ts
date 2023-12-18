import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/responses/IResponse';
import { environment } from 'src/environments/environment';
import { EPage } from '../models/requests/EPageable';
import { IPageable } from '../models/requests/IPageable';
import { DPageable } from '../../data/DPageable';
import { EQuery } from '../models/requests/EQuery';
import { IBaseCreate } from '../models/entities/IBaseCreate';
import { IBaseShow } from '../models/entities/IBaseShow';
import { IBaseUpdate } from '../models/entities/IBaseUpdate';
import { EEndpoint } from '../../services/EEndpoint';

@Injectable({
  providedIn: 'root',
})
export class BaseService<
  Create extends IBaseCreate,
  Show extends IBaseShow,
  Update extends IBaseUpdate
> {
  private url = environment.apiUrl;

  constructor(private http: HttpClient, endpoint: EEndpoint) {
    this.url += `${endpoint}`;
  }

  public create(entity: Create): Observable<IResponse<Show>> {
    return this.http.post<IResponse<Show>>(this.url, entity);
  }

  public getOne(id: number): Observable<IResponse<Show>> {
    const url = `${this.url}/${id}`;
    return this.http.get<IResponse<Show>>(url);
  }

  public getAll(
    pageable: IPageable = DPageable,
    query: string | null = null
  ): Observable<IResponse<Show[]>> {
    let params = new HttpParams()
      .set(EPage.page, DPageable.page.toString())
      .set(EPage.size, DPageable.size.toString());
    pageable.sort.forEach((sort) => {
      params = params.append(EPage.sort, sort);
    });
    if (query) {
      params = params.append(EQuery.query, query);
    }
    return this.http.get<IResponse<Show[]>>(this.url, { params });
  }

  public update(entity: Update): Observable<IResponse<Show>> {
    return this.http.put<IResponse<Show>>(this.url, entity);
  }

  public delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
}
