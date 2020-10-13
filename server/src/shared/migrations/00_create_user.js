exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('telephone').notNullable();
    table.string('mail').notNullable();
    table.string('password').notNullable();
    table.string('address').notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
