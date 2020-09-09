exports.up = function(knex) {
  return knex.schema.createTable('pets', function (table) {
    table.string('id').primary();
    table.string('image').notNullable();
    table.string('type').notNullable();
    table.string('sex').notNullable();
    table.string('breed').notNullable();
    table.string('coat').notNullable();
    table.string('owner');
    table.string('contact');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};
