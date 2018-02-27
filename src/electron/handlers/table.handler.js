const fs = require('fs');


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

exports.generateNewMapping = (event, args) => {
  fs.readFile(args.selectedFile, 'utf8', function (err, data) {
    if (err) throw err;

    const mappings = JSON.parse(data);

    let table = {
      fields: [],
      table: mappings.find(field => field.new_table_name != '?').new_table_name,
      oldTable: mappings.find(field => field.old_table_name !== '?').old_table_name
    };

    table.fields = mappings.map(mapping => {
      let field = {
        property: {
          name: mapping.new_column_name,
          type: mapping.new_data_type,
          nullable: mapping.new_is_nullable,
          length: mapping.new_column_maximum_character_length,
          key: mapping.new_column_key,
          extra: mapping.new_column_extra,
        },
        skip: mapping.ignore,
      };

      if (mapping.old_column_name !== '?') {
        field.oldField = {
          name: mapping.old_column_name,
          table: mapping.old_table_name,
          type: mapping.old_data_type,
          nullable: mapping.old_is_nullable == '?' ? true : mapping.old_is_nullable,
          length: mapping.old_column_length
        };
      }

      if (mapping.data_conversion_expression !== '?') {
        field.expression = mapping.data_conversion_expression;
      }

      if (mapping.fromRelated !== '?') {
        const fromRelatedParams = mapping.fromRelated.split(',');

        field.fromRelated = {
          table: fromRelatedParams[0],
          column: fromRelatedParams[1],
          resultColumn: fromRelatedParams[2],
          oldFieldName: fromRelatedParams[3],
          useOldColumnName: fromRelatedParams[4],
          fallback: fromRelatedParams[5],
        };
      }

      if (mapping.relationship !== '?') {
        field.relationship = mapping.relationship;
      }

      return field;
    });


    event.sender.send('table.parseMapping', table);
  });
};
