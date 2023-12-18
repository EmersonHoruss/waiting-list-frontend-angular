import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  DButtonAccept,
  DButtonCancel,
  DButtonCreate,
  DButtonUpdate,
} from 'src/app/dinosour_library/dinosour_button/data/DButton';
import { CButton } from 'src/app/dinosour_library/dinosour_button/models/CButton';
import { CReturnedClick } from 'src/app/dinosour_library/dinosour_button/models/CReturnedClick';

@Component({
  selector: 'app-dinosour-form-actions',
  templateUrl: './dinosour-form-actions.component.html',
  styleUrls: ['./dinosour-form-actions.component.css'],
})
export class DinosourFormActionsComponent implements OnInit {
  buttonAccept!: CButton;
  buttonCancel!: CButton;
  @Input() shouldCreate!: boolean;
  @Output() on_cancel!: EventEmitter<CReturnedClick>;
  @Output() on_create!: EventEmitter<CReturnedClick>;
  @Output() on_update!: EventEmitter<CReturnedClick>;
  constructor() {
    this.shouldCreate = true;
    if (this.shouldCreate) {
      this.buttonAccept = DButtonCreate;
    }
    this.buttonCancel = DButtonCancel;
    this.on_cancel = new EventEmitter();
    this.on_create = new EventEmitter();
    this.on_update = new EventEmitter();
  }

  ngOnInit(): void {
    this.shouldCreateManager();
  }

  private shouldCreateManager(): void {
    if (this.shouldCreate) {
      this.buttonAccept = DButtonCreate;
    } else {
      this.buttonAccept = DButtonUpdate;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('shouldCreate')) {
      this.shouldCreateManager();
    }
  }

  public handdleCancel(e: CReturnedClick) {
    this.on_cancel.emit(e);
  }
  public handleAccept(e: CReturnedClick) {
    if (this.shouldCreate) {
      this.on_create.emit(e);
    } else {
      this.on_update.emit(e);
    }
  }
}
