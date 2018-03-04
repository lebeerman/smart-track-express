
exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.json('profile');
    });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('users');
};
