const Table = require('../../migrator/table');
const path = require('path');

class User extends Table {
  constructor() {
    super(__dirname + '/users.mapping.json');
  }
}


module.exports = User;
