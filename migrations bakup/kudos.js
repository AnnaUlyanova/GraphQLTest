exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function (table){
    table.increments('id').primary()
    table.integer('user_id').references('user.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    table.string('title')
    table.string('blog_text')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs')
};
