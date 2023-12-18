import { CColumn } from './CColumn';
import { EColorSelected } from './EColorSelected';

export class CTableBody {
  private columns!: CColumn[];
  private data!: any[];
  private isLoading!: boolean;
  private stickyHeader!: boolean;
  private colorSelected!: string;
  private enableIndexes!: boolean;
  private enableCrudActions!: boolean;
  constructor() {
    this.columns = [];
    this.data = [];
    this.isLoading = false;
    this.stickyHeader = true;
    this.colorSelected = EColorSelected.color;
    this.enableIndexes = true;
    this.enableCrudActions = true;
  }
  public getColumns(): CColumn[] {
    return this.columns;
  }
  public setColumns(columns: CColumn[]): CTableBody {
    this.columns = columns;
    return this;
  }
  public addColumn(column: CColumn): CTableBody {
    this.columns.push(column);
    return this;
  }
  public dropColumn(column: CColumn): void {
    this.columns = this.columns.filter(
      (currentColumn: CColumn) => currentColumn.getName() !== column.getName()
    );
  }
  public getNameColumns(): string[] {
    return this.columns.map((column: CColumn) => column.getName());
  }
  public getColumnByName(name: string): CColumn | null {
    return (
      this.columns.find((column: CColumn) => column.getName() === name) ?? null
    );
  }
  public getData(): any[] {
    return this.data;
  }
  public setData(data: any[]): CTableBody {
    this.data = data;
    return this;
  }
  public getIsLoading(): boolean {
    return this.isLoading;
  }
  public setIsLoading(isLoading: boolean): CTableBody {
    this.isLoading = isLoading;
    return this;
  }
  public getStickyHeader(): boolean {
    return this.stickyHeader;
  }
  public setStickyHeader(stickyHeader: boolean): CTableBody {
    this.stickyHeader = stickyHeader;
    return this;
  }
  public getColorSelected(): string {
    return this.colorSelected;
  }
  public setColorSelected(colorSelected: string): CTableBody {
    this.colorSelected = colorSelected;
    return this;
  }
  public getEnableIndexes(): boolean {
    return this.enableIndexes;
  }
  public setEnableIndexes(enableIndexes: boolean): CTableBody {
    this.enableIndexes = enableIndexes;
    return this;
  }
  public getEnableCrudActions(): boolean {
    return this.enableCrudActions;
  }
  public setEnableCrudActions(enableCrudActions: boolean): CTableBody {
    this.enableCrudActions = enableCrudActions;
    return this;
  }
}
