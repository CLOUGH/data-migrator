import { Table } from '../../migrator/table';

export class User extends Table {
  mappingPath = './users.mapping.json';

  constructor() {
    super();

  }

}
