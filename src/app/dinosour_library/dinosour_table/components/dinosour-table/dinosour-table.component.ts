import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CTableBody } from '../../models/CTableBody';
import { BaseService } from 'src/app/dinosour_library/services/base.service';
import { IBaseCreate } from 'src/app/dinosour_library/models/entities/IBaseCreate';
import { IBaseShow } from 'src/app/dinosour_library/models/entities/IBaseShow';
import { IBaseUpdate } from 'src/app/dinosour_library/models/entities/IBaseUpdate';
import { IResponse } from 'src/app/dinosour_library/models/responses/IResponse';
import { IException } from 'src/app/dinosour_library/models/responses/IException';
import { DPageable } from 'src/app/data/DPageable';
import { IPageable } from 'src/app/dinosour_library/models/requests/IPageable';
import { HttpErrorResponse } from '@angular/common/http';
import { cloneDeep } from 'lodash';
import { PageEvent } from '@angular/material/paginator';
import { CReturnedClick } from 'src/app/dinosour_library/dinosour_button/models/CReturnedClick';
import {
  DButtonDelete,
  DButtonEdit,
} from 'src/app/dinosour_library/dinosour_button/data/DButton';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DinosourDialogMessageComponent } from 'src/app/dinosour_library/dinosour_dialog/components/dinosour-dialog-message/dinosour-dialog-message.component';
import { getDialogMessage } from 'src/app/dinosour_library/dinosour_dialog/data/DDialogMessage';
import { EDialogMessage } from 'src/app/dinosour_library/dinosour_dialog/models/EDialogMessage';
import { CDialogClosedBy } from 'src/app/dinosour_library/dinosour_dialog/models/CDialogClosedBy';
import { EDialogClosedByType } from 'src/app/dinosour_library/dinosour_dialog/models/EDialogClosedByType';
import { DinosourDialogLoadingComponent } from 'src/app/dinosour_library/dinosour_dialog/components/dinosour-dialog-loading/dinosour-dialog-loading.component';
import { getDialogLoading } from 'src/app/dinosour_library/dinosour_dialog/data/DDialogLoading';
import { CDialogMessage } from 'src/app/dinosour_library/dinosour_dialog/models/CDialogMessage';
import { CKindFilter } from 'src/app/dinosour_library/dinosour_filter/models/CKindFilter';
import { ESort } from 'src/app/dinosour_library/models/requests/ESort';
import { CFilter } from 'src/app/dinosour_library/dinosour_filter/models/CFilter';

@Component({
  selector: 'app-dinosour-table',
  templateUrl: './dinosour-table.component.html',
  styleUrls: ['./dinosour-table.component.css'],
})
export class DinosourTableComponent implements OnInit {
  @Input() table!: CTableBody;
  @Input() service!: BaseService<IBaseCreate, IBaseShow, IBaseUpdate>;
  @Input() entity!: string;
  @Input() triggerUpdate!: number;
  @Input() filters!: CKindFilter[];
  @Output() on_edit!: EventEmitter<CReturnedClick>;
  @ViewChild('container') container?: ElementRef;
  @ViewChild('header') header?: ElementRef;
  @ViewChild('body') body?: ElementRef;
  @ViewChild('paginator') paginator?: ElementRef;
  response!: IResponse<IBaseShow[]> | IException;
  total!: number;
  pageSize!: number;
  pageable!: IPageable;
  query!: string | null;
  startIndex: number;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public dialog: MatDialog
  ) {
    this.entity = '';
    this.total = 0;
    this.pageable = DPageable;
    this.query = null;
    this.startIndex = 1;
    this.triggerUpdate = 0;
    this.on_edit = new EventEmitter<CReturnedClick>();
  }

  ngOnInit(): void {
    this.list();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('triggerUpdate')) {
      if (!changes['triggerUpdate'].isFirstChange()) {
        this.list();
      }
    }
  }
  private list(): void {
    this.table.setIsLoading(true);
    this.table.setData([]);
    this.table = cloneDeep(this.table);
    this.initStateOfPageable();
    this.service.getAll(this.pageable, this.query).subscribe({
      next: (response: IResponse<IBaseShow[]>) => {
        this.table.setIsLoading(false);
        this.table.setData(response.content);
        this.total = response.pageable.totalElements;
        this.table = cloneDeep(this.table);
      },
      error: (error: HttpErrorResponse) => {
        this.table.setIsLoading(false);
        this.table.setData([]);
        this.table = cloneDeep(this.table);
      },
    });
  }
  private initStateOfPageable(): void {
    const filterKind: string = this.filters[0].getBackendProperty();
    this.pageable.sort = [`${filterKind},${ESort.asc}`];
  }
  ngAfterViewInit(): void {
    const element = this.el?.nativeElement;
    const header = this.header?.nativeElement;
    const body = this.body?.nativeElement;
    const paginator = this.paginator?.nativeElement;
    const container = this.container?.nativeElement;
    const headerHeight = header.offsetHeight;
    const paginatorHeight = paginator.offsetHeight;
    const bodyHeight =
      element.offsetHeight - headerHeight - paginatorHeight - 33;
    this.renderer.setStyle(container, 'display', 'flex');
    this.renderer.setStyle(container, 'flex-direction', 'column');
    this.renderer.setStyle(container, 'gap', '1rem');
    this.renderer.setStyle(body, 'overflow', 'auto');
    this.renderer.setStyle(body, 'max-height', bodyHeight + 'px');
  }
  public handlePage($event: PageEvent): void {
    this.pageable.page = $event.pageIndex;
    this.pageable.size = $event.pageSize;
    this.startIndex = this.pageable.page * this.pageable.size + 1;
    this.list();
  }
  public handleClick($event: CReturnedClick): void {
    if ($event.button.getName() === DButtonEdit.getName()) {
      this.handleEdit($event);
    }
    if ($event.button.getName() === DButtonDelete.getName()) {
      this.handleDelete($event);
    }
  }
  private handleEdit($event: CReturnedClick): void {
    this.on_edit.emit($event);
  }
  private handleDelete($event: CReturnedClick): void {
    const deleteWarning: MatDialogRef<DinosourDialogMessageComponent> =
      this.dialog.open(DinosourDialogMessageComponent, {
        data: getDialogMessage(EDialogMessage.deleteWarning),
      });
    deleteWarning.afterClosed().subscribe((e: CDialogClosedBy) => {
      if (
        e.getType() === EDialogClosedByType.button &&
        e.getReason()?.getName() === 'Sí'
      ) {
        const loadingRef = this.dialog.open(DinosourDialogLoadingComponent, {
          data: getDialogLoading(),
        });
        this.service.delete($event.getData().id).subscribe({
          next: () => {
            loadingRef.close();
            const dialogMessage: CDialogMessage = getDialogMessage(
              EDialogMessage.deleteSuccess
            );
            const dialogMessageDescription: string =
              dialogMessage.getDescription();
            const customizedDialogMessageDescription: string = `El(la) ${this.entity} ${dialogMessageDescription}`;
            dialogMessage.setDescription(customizedDialogMessageDescription);
            this.dialog.open(DinosourDialogMessageComponent, {
              data: dialogMessage,
            });
            this.list();
          },
          error: (error: HttpErrorResponse) => {
            loadingRef.close();
            const dialgoMessage: CDialogMessage = getDialogMessage(
              EDialogMessage.createFailedAfterSubmit
            );
            dialgoMessage.setDescription(error.error.message);
            this.dialog.open(DinosourDialogMessageComponent, {
              data: dialgoMessage,
            });
          },
        });
      }
    });
  }
  public handleFilter($event: CReturnedClick): void {
    const filter: CFilter = $event.data as CFilter;
    const filterValue: string = filter.getValue();
    if (filterValue) {
      this.query = filter.getQuery();
    } else {
      this.query = null;
    }
    const filterKind: string = filter.getKindFilter().getBackendProperty();
    this.pageable.sort = [`${filterKind},${ESort.asc}`];
    this.list();
  }
}
