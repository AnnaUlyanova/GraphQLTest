var app = require('express')();
var bodyParser = require('body-parser')
const userSchema = require('./schema');
const graphqlHttp = require('express-graphql');

var PORT = process.env.PORT || 3007;

app.use('/graphql', graphqlHttp({
    schema: userSchema,
    graphiql: true
}));

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
});
