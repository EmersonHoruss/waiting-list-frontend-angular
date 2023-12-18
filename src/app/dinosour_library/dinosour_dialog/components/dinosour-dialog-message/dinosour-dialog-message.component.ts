import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CDialogMessage } from '../../models/CDialogMessage';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CTransformer } from 'src/app/dinosour_library/utils/CTransformer';
import { classToPlain, plainToClass } from 'class-transformer';
import { CDialogMessageType } from '../../models/CDialogMessageType';
import {
  DButtonCancel,
  DButtonX,
} from 'src/app/dinosour_library/dinosour_button/data/DButton';
import { CButton } from 'src/app/dinosour_library/dinosour_button/models/CButton';
import { CReturnedClick } from 'src/app/dinosour_library/dinosour_button/models/CReturnedClick';
import { CDialogClosedBy } from '../../models/CDialogClosedBy';
import { EDialogClosedByType } from '../../models/EDialogClosedByType';

@Component({
  selector: 'app-dinosour-dialog-message',
  templateUrl: './dinosour-dialog-message.component.html',
  styleUrls: ['./dinosour-dialog-message.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DinosourDialogMessageComponent implements OnInit {
  Xbutton!: CButton;
  constructor(
    public dialogRef: MatDialogRef<DinosourDialogMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogMessage: CDialogMessage
  ) {
    this.Xbutton = DButtonX;
    this.dialogRef.disableClose = !dialogMessage.getAllowBackdropClose();
    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close(
        new CDialogClosedBy()
          .setReason(null)
          .setType(EDialogClosedByType.backdrop)
      );
    });
  }

  ngOnInit(): void {
    this.Xbutton.setClazz('text-' + this.dialogMessage.getType().getColor());
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.dialogMessage.getAllowEscapeClose()) {
      this.dialogRef.close(
        new CDialogClosedBy().setReason(null).setType(EDialogClosedByType.esc)
      );
    }
  }

  public handleClose($event: CReturnedClick): void {
    this.dialogRef.close(
      new CDialogClosedBy()
        .setReason($event.button)
        .setType(EDialogClosedByType.button)
    );
  }
}
