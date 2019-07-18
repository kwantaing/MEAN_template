var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

require('./server/config/mongoose.js')(app)
require('./server/models/author.js')(app)
require('./server/config/routes.js')(app)
app.listen(8000, function() {
    console.log("listening on port 8000");
})