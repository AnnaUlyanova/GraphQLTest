
exports.up = function (knex, Promise) {
  return knex.schema.createTable('kudos', function (table) {
    table.increments('id').primary()
    table.integer('to_user_id').references('users.id')
    table.integer('from_user_id').references('users.id')
    table.string('content')
    table.timestamp('timestamp').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  knex.schema.dropTable('kudos')
}
