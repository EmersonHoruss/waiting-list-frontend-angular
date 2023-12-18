export class CItemSelect {
  private key!: string;
  private value!: string;
  private description?: string;
  constructor(
    key: string = 'notFound',
    value: string = 'notFound',
    description: string | undefined = undefined
  ) {
    this.key = key;
    this.value = value;
    this.description = description;
  }
  public getKey(): string {
    return this.key;
  }
  public setKey(key: string): CItemSelect {
    this.key = key;
    return this;
  }
  public getValue(): string {
    return this.value;
  }
  public setValue(value: string): CItemSelect {
    this.value = value;
    return this;
  }
  public getDescription(): string | null {
    return this.description ?? null;
  }
  public setDescription(description: string): CItemSelect {
    this.description = description;
    return this;
  }
}
