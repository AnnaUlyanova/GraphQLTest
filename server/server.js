var app = require('express')();
var bodyParser = require('body-parser')
const schema = require('./schema');
const {graphql} = require('graphql');

var PORT = process.env.PORT || 3007;



// app.use(bodyParser.json())
// app.use(cors({origin: 'http://localhost:8080'}))
// app.use(express.static(path.join(__dirname, 'static')))

const query = process.argv[2];
graphql(schema, query).then(result => {
    console.log(result);
});


// app.listen(PORT, function () {
//   console.log('Listening on port', PORT)
// })
