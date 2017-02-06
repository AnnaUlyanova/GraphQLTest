exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'Ty'}),
        knex('users').insert({id: 2, name: 'Don'})
      ])
    }).then(function () {
      return knex('kudos').del()
        .then(function () {
          return Promise.all([
            // Inserts seed entries
            knex('kudos').insert({to_user_id: 1, from_user_id: 2, content: 'Nice work!'}),
            knex('kudos').insert({to_user_id: 2, from_user_id: 1, content: 'Good job!'})
          ])
        })
    })
}
