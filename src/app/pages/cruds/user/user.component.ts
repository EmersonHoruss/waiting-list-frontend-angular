import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { form } from './form';
import { CFormBody } from 'src/app/dinosour_library/dinosour_form/models/CFormBody';
import { CTableBody } from 'src/app/dinosour_library/dinosour_table/models/CTableBody';
import { table } from './table';
import { CInput } from 'src/app/dinosour_library/dinosour_form/models/CInput';
import { DIdentifierInput } from 'src/app/dinosour_library/dinosour_form/data/DIdentifierInput';
import { cloneDeep } from 'lodash';
import { CKindFilter } from 'src/app/dinosour_library/dinosour_filter/models/CKindFilter';
import { filters } from './filters';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  form!: CFormBody;
  filters!: CKindFilter[];
  entityForm!: string;
  table!: CTableBody;
  entityTable!: string;
  triggerUpdate!: number;
  constructor(public service: UserService) {
    this.form = form;
    this.filters = filters;
    this.table = table;
    this.entityForm = 'Usuario';
    this.entityTable = 'usuarios';
    this.triggerUpdate = 0;
  }
  ngOnInit(): void {}
  public handleEdit($event: any): void {
    const entityToEdit = $event.data;
    this.form.addInput(DIdentifierInput);
    this.form.updateByBackendProperty(entityToEdit);
    this.form = cloneDeep(this.form);
  }
  public handleCreated($event: any): void {
    console.log($event);
    console.log(this.table);
    this.triggerUpdate++;
  }
  public handleUpdated($event: any): void {
    console.log($event);
    console.log(this.table);
    this.triggerUpdate++;
  }
}
