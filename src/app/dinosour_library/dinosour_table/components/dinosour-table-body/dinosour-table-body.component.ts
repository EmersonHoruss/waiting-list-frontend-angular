import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CTableBody } from '../../models/CTableBody';
import { cloneDeep } from 'lodash';
import { EColumnType } from '../../models/EColumnType';
import { CReturnedClick } from 'src/app/dinosour_library/dinosour_button/models/CReturnedClick';
import { CColumn } from '../../models/CColumn';
import { DColumnButtons, DColumnIndex } from '../../data/DColumn';
import { IBaseShow } from 'src/app/dinosour_library/models/entities/IBaseShow';

@Component({
  selector: 'app-dinosour-table-body',
  templateUrl: './dinosour-table-body.component.html',
  styleUrls: ['./dinosour-table-body.component.css'],
})
export class DinosourTableBodyComponent implements OnInit {
  @Input() tableBody!: CTableBody;
  @Input() startIndex!: number;
  @Output() on_click!: EventEmitter<CReturnedClick>;
  EColumnType = EColumnType;
  constructor() {
    this.on_click = new EventEmitter<CReturnedClick>();
  }
  ngOnInit(): void {
    this.managerIndexes();
    this.managerActions();
  }
  private managerIndexes(): void {
    const column: CColumn | null = this.tableBody.getColumnByName(
      EColumnType.index
    );
    if (this.tableBody.getEnableIndexes()) {
      if (!column) {
        this.tableBody.setColumns([
          DColumnIndex,
          ...this.tableBody.getColumns(),
        ]);
      }
    } else {
      if (column) {
        this.tableBody.dropColumn(column);
      }
    }
  }
  private managerActions(): void {
    const column: CColumn | null = this.tableBody.getColumnByName(
      EColumnType.buttons
    );
    if (this.tableBody.getEnableCrudActions()) {
      if (!column) {
        this.tableBody.addColumn(DColumnButtons);
      }
    } else {
      if (column) {
        this.tableBody.dropColumn(column);
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('tableBody')) {
      if (!changes['tableBody'].isFirstChange()) {
        this.managerIndexes();
        this.managerActions();
      }
    }
  }

  handleButtonClick($event: CReturnedClick, element: IBaseShow): void {
    this.on_click.emit($event.setData(element));
  }
}
