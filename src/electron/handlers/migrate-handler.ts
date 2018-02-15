const db = require('odbc');
const connectionString = '';

export class MigrateHandler {
  async migrateTable(event, args) {
    if (!args.table) {
      throw TypeError('Invalid request. Table name is required');
    }
    const table = await require(`../tables/${args.table}`);
    table.migrate();
  }
}
