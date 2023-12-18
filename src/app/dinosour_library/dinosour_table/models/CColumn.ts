import { CButton } from '../../dinosour_button/models/CButton';
import { EColumnClassName } from './EColumnClassName';
import { EColumnType } from './EColumnType';

export class CColumn {
  private name!: string;
  private type!: EColumnType;
  private displayed!: string;
  private isVisible!: boolean;
  private sticky!: boolean;
  private stickyEnd!: boolean;
  private classNameHeader!: string;
  private classNameData!: string;
  private styleHeader!: { [attribute: string]: string };
  private styleData!: { [attribute: string]: string };
  private buttons?: CButton[];
  constructor() {
    this.name = '';
    this.type = EColumnType.notFound;
    this.displayed = '';
    this.isVisible = true;
    this.sticky = false;
    this.stickyEnd = false;
    this.classNameHeader = EColumnClassName.className;
    this.classNameData = EColumnClassName.className;
    this.styleHeader = {};
    this.styleData = {};
    this.buttons = [];
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): CColumn {
    this.name = name;
    return this;
  }
  public getType(): EColumnType {
    return this.type;
  }
  public setType(type: EColumnType): CColumn {
    this.type = type;
    return this;
  }
  public getDisplayed(): string {
    return this.displayed;
  }
  public setDisplayed(displayed: string): CColumn {
    this.displayed = displayed;
    return this;
  }
  public getIsVisible(): boolean {
    return this.isVisible;
  }
  public setIsVisible(isVisible: boolean): CColumn {
    this.isVisible = isVisible;
    return this;
  }
  public getSticky(): boolean {
    return this.sticky;
  }
  public setSticky(sticky: boolean): CColumn {
    this.sticky = sticky;
    return this;
  }
  public getStickyEnd(): boolean {
    return this.stickyEnd;
  }
  public setStickyEnd(stickyEnd: boolean): CColumn {
    this.stickyEnd = stickyEnd;
    return this;
  }
  public getClassNameHeader(): string {
    return this.classNameHeader;
  }
  public setClassNameHeader(classNameHeader: string): CColumn {
    this.classNameHeader = classNameHeader;
    return this;
  }
  public getClassNameData(): string {
    return this.classNameData;
  }
  public setClassNameData(classNameData: string): CColumn {
    this.classNameData = classNameData;
    return this;
  }
  public getStyleHeader(): { [attribute: string]: string } {
    return this.styleHeader;
  }
  public setStyleHeader(styleHeader: { [attribute: string]: string }): CColumn {
    this.styleHeader = styleHeader;
    return this;
  }
  public getStyleData(): { [attribute: string]: string } {
    return this.styleData;
  }
  public setStyleData(styleData: { [attribute: string]: string }): CColumn {
    this.styleData = styleData;
    return this;
  }
  public getButtons(): CButton[] | null {
    return this.buttons ?? null;
  }
  public setButtons(buttons: CButton[]): CColumn {
    this.buttons = buttons;
    return this;
  }
}
