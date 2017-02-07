const kudos = [
  {
    "id": 1,
    "toId": 2,
    "fromId": 3,
    "content": "string",
    "timestamp": "DateTime"
  }
]

function getKudos (callback) {
  setTimeout(() => {
    callback(null, kudos)
  }, 1000)
}

module.exports = {
  kudos,
  getKudos
}
