import { CItemSelect } from '../../dinosour_form/models/CItemSelect';
import { CColumn } from '../../dinosour_table/models/CColumn';

export class CKindFilter {
  private name: string;
  private backendProperty: string;
  constructor() {
    this.name = '';
    this.backendProperty = '';
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): CKindFilter {
    this.name = name;
    return this;
  }
  public getBackendProperty(): string {
    return this.backendProperty;
  }
  public setBackendProperty(backendProperty: string): CKindFilter {
    this.backendProperty = backendProperty;
    return this;
  }
  public static getFilters(columns: CColumn[]): CKindFilter[] {
    return columns.map((column: CColumn) =>
      new CKindFilter()
        .setName(column.getDisplayed())
        .setBackendProperty(column.getName())
    );
  }
  public static getItemSelects(kindFilters: CKindFilter[]): CItemSelect[] {
    return kindFilters.map(
      (kindFilter: CKindFilter): CItemSelect =>
        new CItemSelect()
          .setKey(kindFilter.getBackendProperty())
          .setValue(kindFilter.getName())
    );
  }
}
