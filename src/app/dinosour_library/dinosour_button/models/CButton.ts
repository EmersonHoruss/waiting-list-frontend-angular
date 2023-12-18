import { EButtonColor } from './EButtonColor';
import { EButtonType } from './EButtonType';

export class CButton {
  private name!: string;
  private type!: EButtonType;
  private color!: EButtonColor;
  private icon!: string;
  private clazz!: string;
  constructor() {
    this.name = '';
    this.type = EButtonType.notFound;
    this.color = EButtonColor.notFound;
    this.icon = '';
    this.clazz = '';
  }
  public setName(name: string): CButton {
    this.name = name;
    return this;
  }
  public getName(): string {
    return this.name;
  }
  public setType(type: EButtonType): CButton {
    this.type = type;
    return this;
  }
  public getType(): EButtonType {
    return this.type;
  }
  public setColor(color: EButtonColor): CButton {
    this.color = color;
    return this;
  }
  public getColor(): EButtonColor {
    return this.color;
  }
  public getIcon(): string {
    return this.icon;
  }
  public setIcon(icon: string): CButton {
    this.icon = icon;
    return this;
  }
  public getClazz(): string {
    return this.clazz;
  }
  public setClazz(clazz: string): CButton {
    this.clazz = clazz;
    return this;
  }
}
