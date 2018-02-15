const odbc = require('odbc');

class Migrator {
  run() {
    return new Promise((resolve, reject) => {
      console.log('ran successfully');
    });
  }
}

module.exports = Migrator;
