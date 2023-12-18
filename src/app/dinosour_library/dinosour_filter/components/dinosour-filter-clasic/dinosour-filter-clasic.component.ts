import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CFilter } from '../../models/CFilter';
import { DFilterClassic } from '../../data/DFilterClassic';
import { CFormBody } from 'src/app/dinosour_library/dinosour_form/models/CFormBody';
import { CButton } from 'src/app/dinosour_library/dinosour_button/models/CButton';
import { DButtonFilter } from 'src/app/dinosour_library/dinosour_button/data/DButton';
import { CReturnedClick } from 'src/app/dinosour_library/dinosour_button/models/CReturnedClick';
import { CKindFilter } from '../../models/CKindFilter';
import { EFilter } from '../../models/EFilter';
import { CItemSelect } from 'src/app/dinosour_library/dinosour_form/models/CItemSelect';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dinosour-filter-clasic',
  templateUrl: './dinosour-filter-clasic.component.html',
  styleUrls: ['./dinosour-filter-clasic.component.css'],
})
export class DinosourFilterClasicComponent implements OnInit {
  @Input() kindFilters!: CKindFilter[];
  @Output() on_filter!: EventEmitter<CReturnedClick>;
  form: CFormBody = DFilterClassic;
  filterButton: CButton = DButtonFilter;
  private reactiveForm?: FormGroup;
  constructor() {
    this.on_filter = new EventEmitter<CReturnedClick>();
  }

  ngOnInit(): void {
    const data: CItemSelect[] = CKindFilter.getItemSelects(this.kindFilters);
    this.form
      .getInputByLabel(EFilter.kindFilter)
      ?.setData(data)
      .setValue(data[0].getKey());
  }
  public handleChanges($event: FormGroup): void {
    this.reactiveForm = $event;
  }
  public handleFilter($event: CReturnedClick): void {
    const selectedKindFilter: string =
      this.reactiveForm?.value[EFilter.kindFilter];
    const kindFilter: CKindFilter | null =
      this.kindFilters.find(
        (kindFilter: CKindFilter) =>
          kindFilter.getBackendProperty() === selectedKindFilter
      ) ?? null;
    if (kindFilter) {
      const filter: CFilter = new CFilter()
        .setKindFilter(kindFilter)
        .setValue(this.reactiveForm?.value[EFilter.valueFilter]);
      $event.setData(filter);
      this.on_filter.emit($event);
    }
  }
}
