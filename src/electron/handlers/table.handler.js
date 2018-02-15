let getRequireStatement = (tableName) => {
  return `../tables/${tableName}/${tableName}.table`;
};
let getTableInstance = (tableName) => {
  const Table = require(getRequireStatement(tableName));
  return new Table();
};

exports.getMapping = (event, args) => {
  const tableInstace = getTableInstance(args.table);
  event.sender.send('table.mapping', tableInstace.getMapping());
};

exports.migrate = (event, args) => {
  const tableInstace = getTableInstance(args.table);

  tableInstace.migrate().then(() => {
    event.sender.send('table.migrating.done');

  });
};
