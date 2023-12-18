import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ValidationErrors,
  Validators,
  FormControl,
} from '@angular/forms';
import CConstraint from '../../models/CConstraint';
import { CFormBody } from '../../models/CFormBody';
import { CInput } from '../../models/CInput';
import ConstraintType from '../../models/EConstraintType';
import { EInputType } from '../../models/EInputType';
import { MatSelect } from '@angular/material/select';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DinosourDialogMessageComponent } from 'src/app/dinosour_library/dinosour_dialog/components/dinosour-dialog-message/dinosour-dialog-message.component';
import { EDialogMessageType } from 'src/app/dinosour_library/dinosour_dialog/models/EDialogMessageType';
import { getDialogMessage } from 'src/app/dinosour_library/dinosour_dialog/data/DDialogMessage';
import { EDialogMessage } from 'src/app/dinosour_library/dinosour_dialog/models/EDialogMessage';
import { CReturnedClick } from 'src/app/dinosour_library/dinosour_button/models/CReturnedClick';
import { DinosourDialogLoadingComponent } from 'src/app/dinosour_library/dinosour_dialog/components/dinosour-dialog-loading/dinosour-dialog-loading.component';
import { getDialogLoading } from 'src/app/dinosour_library/dinosour_dialog/data/DDialogLoading';
import { BaseService } from 'src/app/dinosour_library/services/base.service';
import { IBaseCreate } from 'src/app/dinosour_library/models/entities/IBaseCreate';
import { IBaseShow } from 'src/app/dinosour_library/models/entities/IBaseShow';
import { IUserUpdate } from 'src/app/models/entities/user/IUserUpdate';
import { CDialogMessage } from 'src/app/dinosour_library/dinosour_dialog/models/CDialogMessage';
import { IException } from 'src/app/dinosour_library/models/responses/IException';
import { IResponse } from 'src/app/dinosour_library/models/responses/IResponse';
import { DIdentifierInput } from '../../data/DIdentifierInput';
import { cloneDeep } from 'lodash';
import { CMapper } from '../../utils/CMapper';
import { HttpErrorResponse } from '@angular/common/http';
import { IBaseUpdate } from 'src/app/dinosour_library/models/entities/IBaseUpdate';
import { CDialogClosedBy } from 'src/app/dinosour_library/dinosour_dialog/models/CDialogClosedBy';
import { EDialogClosedByType } from 'src/app/dinosour_library/dinosour_dialog/models/EDialogClosedByType';
FormControl;
@Component({
  selector: 'app-dinosour-form',
  templateUrl: './dinosour-form.component.html',
  styleUrls: ['./dinosour-form.component.css'],
})
export class DinosourFormComponent implements OnInit {
  @Input() entity!: string;
  @Input() form!: CFormBody;
  @Input() service?: BaseService<IBaseCreate, IBaseShow, IBaseUpdate>;
  @Output() on_created!: EventEmitter<IBaseShow>;
  @Output() on_updated!: EventEmitter<IBaseShow>;
  private reactiveForm?: FormGroup;
  private initForm!: CFormBody;
  public shouldCreate!: boolean;
  public reset!: number;
  public markAsTouched!: number;
  constructor(public dialog: MatDialog) {
    this.entity = '';
    this.shouldCreate = true;
    this.reset = 0;
    this.markAsTouched = 0;
    this.on_created = new EventEmitter<IBaseShow>();
    this.on_updated = new EventEmitter<IBaseShow>();
  }

  ngOnInit(): void {
    this.shouldCreate = this.form.shouldCreate();
    this.initForm = cloneDeep(this.form);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('form')) {
      if (!changes['form'].firstChange) {
        this.shouldCreate = this.form.shouldCreate();
      }
    }
  }

  public handleChanges($event: FormGroup): void {
    this.reactiveForm = $event;
  }

  public handleCreate($event: CReturnedClick): void {
    this.markAsTouched++;
    const loadingRef = this.dialog.open(DinosourDialogLoadingComponent, {
      data: getDialogLoading(),
    });
    if (this.reactiveForm?.valid) {
      const entity = CMapper.map(this.form, this.reactiveForm.value);
      this.service?.create(entity).subscribe({
        next: (response: IResponse<IBaseShow>) => {
          loadingRef.close();
          const dialogMessage: CDialogMessage = getDialogMessage(
            EDialogMessage.createSuccess
          );
          const dialogMessageDescription: string =
            dialogMessage.getDescription();
          const customizedDialogMessageDescription: string = `El(la) ${this.entity} ${dialogMessageDescription}`;
          dialogMessage.setDescription(customizedDialogMessageDescription);
          this.dialog.open(DinosourDialogMessageComponent, {
            data: dialogMessage,
          });
          const content: IBaseShow = response.content as IBaseShow;
          this.form.updateByLabel(this.reactiveForm?.value);
          this.form.addInput(DIdentifierInput.setValue(content.id.toString()));
          this.shouldCreate = this.form.shouldCreate();
          this.form = cloneDeep(this.form);
          this.on_created.emit(content);
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
    } else {
      loadingRef.close();
      this.dialog.open(DinosourDialogMessageComponent, {
        data: getDialogMessage(EDialogMessage.createFailedBecauseWrongForm),
      });
    }
  }

  public handleUpdate($event: CReturnedClick): void {
    this.markAsTouched++;
    const loadingRef = this.dialog.open(DinosourDialogLoadingComponent, {
      data: getDialogLoading(),
    });
    if (!this.form.isDifferent(this.reactiveForm?.value)) {
      loadingRef.close();
      this.dialog.open(DinosourDialogMessageComponent, {
        data: getDialogMessage(EDialogMessage.updateFailedBecauseNoChangesDone),
      });
    } else if (this.reactiveForm?.valid) {
      const entity: any = CMapper.map(this.form, this.reactiveForm.value);
      this.service?.update(entity).subscribe({
        next: (response: IResponse<IBaseShow>) => {
          loadingRef.close();
          const dialogMessage: CDialogMessage = getDialogMessage(
            EDialogMessage.updateSuccess
          );
          const dialogMessageDescription: string =
            dialogMessage.getDescription();
          const customizedDialogMessageDescription: string = `El(la) ${this.entity} ${dialogMessageDescription}`;
          dialogMessage.setDescription(customizedDialogMessageDescription);
          this.dialog.open(DinosourDialogMessageComponent, {
            data: dialogMessage,
          });
          this.shouldCreate = this.form.shouldCreate();
          this.form.updateByLabel(this.reactiveForm?.value);
          this.form = cloneDeep(this.form);
          this.on_updated.emit(response.content as IBaseShow);
        },
        error: (error: IException) => {
          loadingRef.close();
          const dialgoMessage: CDialogMessage = getDialogMessage(
            EDialogMessage.updateFailedAfterSubmit
          );
          dialgoMessage.setDescription(error.message);
          this.dialog.open(DinosourDialogMessageComponent, {
            data: dialgoMessage,
          });
        },
      });
    } else {
      loadingRef.close();
      this.dialog.open(DinosourDialogMessageComponent, {
        data: getDialogMessage(EDialogMessage.updateFailedBecauseWrongForm),
      });
    }
  }

  public handleCancel($event: CReturnedClick): void {
    if (!this.form.isDifferent(this.reactiveForm?.value)) {
      this.dialog.open(DinosourDialogMessageComponent, {
        data: getDialogMessage(EDialogMessage.cancelFailedBecauseNoChangesDone),
      });
    } else {
      const cancelWarning: MatDialogRef<DinosourDialogMessageComponent> =
        this.dialog.open(DinosourDialogMessageComponent, {
          data: getDialogMessage(EDialogMessage.cancelWarning),
        });
      cancelWarning.afterClosed().subscribe((e: CDialogClosedBy) => {
        if (
          e.getType() === EDialogClosedByType.button &&
          e.getReason()?.getName() === 'Sí'
        ) {
          this.form = cloneDeep(this.form);
          this.dialog.open(DinosourDialogMessageComponent, {
            data: getDialogMessage(EDialogMessage.cancelSuccess),
          });
        }
      });
    }
  }

  public handleClean($event: CReturnedClick): void {
    this.form = cloneDeep(this.initForm);
    this.shouldCreate = this.form.shouldCreate();
  }
}
