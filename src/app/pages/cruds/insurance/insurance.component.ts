import { Component, OnInit } from '@angular/core';
import { CFormBody } from 'src/app/dinosour_library/dinosour_form/models/CFormBody';
import { InsuranceService } from 'src/app/services/insurance/insurance.service';
import { form } from './form';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
})
export class InsuranceComponent implements OnInit {
  form!: CFormBody;
  entity!: string;
  constructor(public service: InsuranceService) {
    this.form = form;
    this.entity = 'seguro';
  }

  ngOnInit(): void {}
}
