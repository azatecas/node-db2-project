
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id');

    tbl.string('VIN', 128)
        .notNullable()
        .unique();

    tbl.string('make', 128)
        .notNullable();

    tbl.string('model', 128)
        .notNullable();
    
    tbl.interger('milage', 128)
        .notNullable

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
