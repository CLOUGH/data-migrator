import * as odbc from 'odbc';

export class Migrator {
  run(): Promise<null> {
    return new Promise((resolve, reject) => {
      console.log('ran successfully');
    });
  }
}
