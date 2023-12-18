import { CButton } from '../../dinosour_button/models/CButton';
import { EDialogClosedByType } from './EDialogClosedByType';

export class CDialogClosedBy {
  private type!: EDialogClosedByType;
  private reason!: CButton | null;
  constructor() {
    this.type = EDialogClosedByType.notFound;
    this.reason = null;
  }
  public getType(): EDialogClosedByType {
    return this.type;
  }
  public setType(type: EDialogClosedByType): CDialogClosedBy {
    this.type = type;
    return this;
  }
  public getReason(): CButton | null {
    return this.reason;
  }
  public setReason(reason: CButton | null): CDialogClosedBy {
    this.reason = reason;
    return this;
  }
}
