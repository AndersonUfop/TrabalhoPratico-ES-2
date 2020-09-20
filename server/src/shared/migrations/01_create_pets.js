exports.up = function(knex) {
  return knex.schema.createTable('pets', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('image').notNullable();
    table.string('specie').notNullable();
    table.string('breed').notNullable();
    table.string('port').notNullable();
    table.integer('age').notNullable();
    table.string('sex').notNullable();
    table.string('city').notNullable();

    table.string('user_id')
      .notNullable()
      .references('id')
      .inTable('users');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};
