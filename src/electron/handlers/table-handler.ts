export class TableHandler {
  public static getMapping(event, args) {
    // const table = await this.getTableInstance(args.table);

    event.sender.send('table.mapping', 'table.getMapping()');
  }

  private static async getTableInstance(table) {
    return require(`../tables/${table}`);
  }

  public static async migrate(event, args) {
    const table = await this.getTableInstance(args.table);
    table.migrate().then(() => {
      event.sender.send('table.migrating.done');

    });
  }

}
