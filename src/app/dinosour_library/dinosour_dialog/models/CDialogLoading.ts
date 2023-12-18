export class CDialogLoading {
  private title: string;
  private description: string;
  private allowBackdropClose: boolean;
  private allowEscapeClose: boolean;
  constructor() {
    this.title = '';
    this.description = '';
    this.allowBackdropClose = true;
    this.allowEscapeClose = true;
  }
  public getTitle(): string {
    return this.title;
  }
  public setTitle(title: string): CDialogLoading {
    this.title = title;
    return this;
  }
  public getDescription(): string {
    return this.description;
  }
  public setDescription(description: string): CDialogLoading {
    this.description = description;
    return this;
  }
  public getAllowBackdropClose(): boolean {
    return !!this.allowBackdropClose;
  }
  public setAllowBackdropClose(allowBackdropClose: boolean): CDialogLoading {
    this.allowBackdropClose = allowBackdropClose;
    return this;
  }
  public getAllowEscapeClose(): boolean {
    return !!this.allowEscapeClose;
  }
  public setAllowEscapeClose(allowEscapeClose: boolean): CDialogLoading {
    this.allowEscapeClose = allowEscapeClose;
    return this;
  }
}
