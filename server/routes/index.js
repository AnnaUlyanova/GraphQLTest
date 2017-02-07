var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getKudos((err, kudos) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json(kudos)
    }
  })
})

module.exports = router
