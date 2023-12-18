import { Type } from 'class-transformer';
import { CButton } from '../../dinosour_button/models/CButton';
import { EDialogMessageType } from './EDialogMessageType';

export class CDialogMessageType {
  private color: string;
  private type: EDialogMessageType;
  private name: string;
  private icon: string;
  @Type(() => CButton)
  private buttons: CButton[];
  constructor() {
    this.color = '';
    this.type = EDialogMessageType.notFound;
    this.name = '';
    this.icon = '';
    this.buttons = [];
  }
  public getColor(): string {
    return this.color ?? '';
  }
  public setColor(color: string): CDialogMessageType {
    this.color = color;
    return this;
  }
  public getType(): EDialogMessageType | null {
    return this.type ?? EDialogMessageType.notFound;
  }
  public setType(type: EDialogMessageType): CDialogMessageType {
    this.type = type;
    return this;
  }
  public getName(): string {
    return this.name ?? '';
  }
  public setName(name: string): CDialogMessageType {
    this.name = name;
    return this;
  }
  public getIcon(): string {
    return this.icon ?? '';
  }
  public setIcon(icon: string): CDialogMessageType {
    this.icon = icon;
    return this;
  }
  public getButtons(): CButton[] {
    return this.buttons;
  }
  public setButtons(buttons: CButton[]): CDialogMessageType {
    this.buttons = buttons;
    return this;
  }
}
