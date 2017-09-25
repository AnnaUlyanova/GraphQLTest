const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getKudos: getKudos
}

function getKudos (callback) {
  var db = connection
  db('kudos')
    .join('users as to', {'kudos.to_user_id': 'to.id'})
    .join('users as from', {'kudos.from_user_id': 'from.id'})
    .select('kudos.id', 'kudos.content', 'kudos.timestamp', 'to.name as toName', 'from.name as fromName')
    .then(function (kudos) {
      callback(null, kudos)
    })
    .catch(function (err) {
      callback(err)
    })
}
