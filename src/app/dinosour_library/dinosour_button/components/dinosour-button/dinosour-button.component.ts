import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { EButtonType } from '../../models/EButtonType';
import { CButton } from '../../models/CButton';
import { MatButton } from '@angular/material/button';
import { CReturnedClick } from '../../models/CReturnedClick';

@Component({
  selector: 'app-dinosour-button',
  templateUrl: './dinosour-button.component.html',
  styleUrls: ['./dinosour-button.component.css'],
})
export class DinosourButtonComponent implements OnInit {
  @Input() button!: CButton;
  @Output() on_click!: EventEmitter<CReturnedClick>;
  EButtonType = EButtonType;
  constructor() {
    this.on_click = new EventEmitter<CReturnedClick>();
  }

  ngOnInit(): void {}

  public handleClick(e: MouseEvent): void {
    this.on_click.emit(new CReturnedClick().setEvent(e).setButton(this.button));
  }
}
