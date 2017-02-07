var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getKudos((err, kudos) => {
    if (err){
      res.status(500)
    }
    else 
    res.status(200).json(kudos)
  })
})

module.exports = router
