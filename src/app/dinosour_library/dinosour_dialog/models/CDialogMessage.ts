import { Expose, Type } from 'class-transformer';
import { getDialogMessageType } from '../data/DDialogMessageType';
import { CDialogMessageType } from './CDialogMessageType';
import { EDialogMessageType } from './EDialogMessageType';

export class CDialogMessage {
  @Type(() => CDialogMessageType)
  private type: CDialogMessageType;
  private title: string;
  private description: string;
  private allowBackdropClose: boolean;
  private allowEscapeClose: boolean;
  constructor() {
    this.type = getDialogMessageType(EDialogMessageType.notFound);
    this.title = '';
    this.description = '';
    this.allowBackdropClose = true;
    this.allowEscapeClose = true;
  }
  public getType(): CDialogMessageType {
    return this.type;
  }
  public setType(type: CDialogMessageType): CDialogMessage {
    this.type = type;
    return this;
  }
  @Expose()
  public getTitle(): string {
    return this.title;
  }
  public setTitle(title: string): CDialogMessage {
    this.title = title;
    return this;
  }
  public getDescription(): string {
    return this.description;
  }
  public setDescription(description: string): CDialogMessage {
    this.description = description;
    return this;
  }
  public getAllowBackdropClose(): boolean {
    return this.allowBackdropClose;
  }
  public setAllowBackdropClose(allowBackdropClose: boolean): CDialogMessage {
    this.allowBackdropClose = allowBackdropClose;
    return this;
  }
  public getAllowEscapeClose(): boolean {
    return this.allowEscapeClose;
  }
  public setAllowEscapeClose(allowEscapeClose: boolean): CDialogMessage {
    this.allowEscapeClose = allowEscapeClose;
    return this;
  }
}
