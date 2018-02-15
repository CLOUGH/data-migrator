const Migrator = require('./migrator');

const fs = require('fs');

class Table {
  constructor(mappingPath) {
    this.truncate = true;
    this.mappingPath = mappingPath;

    this.mapping = JSON.parse(fs.readFileSync(this.mappingPath, 'utf8'));
    this.sourceSQL = `SELECT * FROM [${this.mapping.oldTable}]`;
  }

  getMapping() {
    return this.mapping;
  }

  migrate() {
    const migrater = new Migrator();
    migrater.run().then(stats => {

    });
  }
}

module.exports = Table;
