
exports.up = function(knex) {
  return knex.schema.createTable('car-lot', tbl => {
    tbl.increments();

    tbl.string('VIN', 128)
        .notNullable()
        .unique();

    tbl.string('make', 128)
        .notNullable();

    tbl.string('model', 128)
        .notNullable();
    
    tbl.integer('milage')
        .notNullable();

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car-lot');
};
