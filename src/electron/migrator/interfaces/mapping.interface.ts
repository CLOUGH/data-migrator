export interface Mapping {
  table: string;
  oldTable: string;
  fields: Field[];
}
export interface Field {
  property: {
    name: string,
    type: string,
    nullable: boolean,
    length: number,
    key: string,
    extra: string,
  };
  oldField?: {
    name: string,
    table: string,
    type: string,
    nullable: string,
    length: number
  };
  skip: boolean;
  expression?: string;
  relationship?: string;
  fromRelated?: {
    table: string,
    column: string,
    resultColumn: string,
    default?: string,
    oldFieldName: boolean,
    fallback?: string,
  };
}
