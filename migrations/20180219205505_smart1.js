exports.up = (knex, Promise) => {
  return knex.schema.createTable('goals', table => {
    table.increments('id').primary();
    table.text('owner')
    table.date('dueDate');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.text('goal');
    table.boolean('complete').defaultTo(false);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('goals');
};
