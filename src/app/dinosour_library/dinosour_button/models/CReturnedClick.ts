import { IBaseShow } from 'src/app/dinosour_library/models/entities/IBaseShow';
import { CButton } from './CButton';

export class CReturnedClick {
  event!: MouseEvent;
  button!: CButton;
  data?: any;
  public setEvent(event: MouseEvent): CReturnedClick {
    this.event = event;
    return this;
  }
  public getEvent(): MouseEvent {
    return this.event;
  }
  public setButton(button: CButton): CReturnedClick {
    this.button = button;
    return this;
  }
  public getButton(): CButton {
    return this.button;
  }
  public setData(data: any): CReturnedClick {
    this.data = data;
    return this;
  }
  public getData(): any {
    return this.data ?? null;
  }
}
