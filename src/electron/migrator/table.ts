import { Mapping } from './interfaces/mapping.interface';
import { Migrator } from './migrator';
import * as fs from 'fs';

export abstract class Table {
  protected abstract mappingPath: string;
  protected mapping: Mapping;
  protected truncate = true;
  protected sourceSQL: string;

  constructor() {
    this.loadMapping().then((mapping) => {
      this.mapping = mapping;
      this.sourceSQL = `SELECT * FROM [${this.mapping.oldTable}]`;
    });
  }

  protected loadMapping(): Promise<Mapping> {
    return new Promise((resolve, reject) => {
      const data = fs.readFile(this.mappingPath, 'utf8', (err, mapping: string) => {
        if (err) {
          throw err;
        }

        resolve(JSON.parse(mapping));
      });

    });
  }

  public getMapping() {
    return this.mapping;
  }

  public migrate() {
    const migrater = new Migrator();
    migrater.run().then(stats => {

    });

  }
}
