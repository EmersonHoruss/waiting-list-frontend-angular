import { CItemSelect } from '../../dinosour_form/models/CItemSelect';
import { CKindFilter } from './CKindFilter';

export class CFilter {
  private kindFilter: CKindFilter;
  private value: string;
  constructor() {
    this.kindFilter = new CKindFilter();
    this.value = '';
  }
  public setKindFilter(kindFilter: CKindFilter): CFilter {
    this.kindFilter = kindFilter;
    return this;
  }
  public getKindFilter(): CKindFilter {
    return this.kindFilter;
  }
  public getValue(): string {
    return this.value;
  }
  public setValue(value: string): CFilter {
    this.value = value;
    return this;
  }
  public getQuery(): string {
    // ct mean contains and <> is just a part of grammar of query to backend
    // backendproperty has the next grammar
    // backendproperty = string | string.backendproperty
    return `${this.kindFilter.getBackendProperty()}<ct>${this.value}`;
  }
}
