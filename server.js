var express = require('express');
var app = express();

var app_rest_location = process.env.OPENSHIFT_APP_REST || '10.16.40.63';
var app_rest_port = process.env.OPENSHIFT_APP_REST_PORT || '80';
var app_web_debug = process.env.OPENSHIFT_APP_WEB_DEBUG || false;


app.configure(function() {
    app.use(express.logger());
    app.set('views', __dirname + '/app');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/app'));
    app.use('/bower_components',  express.static(__dirname + '/app/bower_components'));
    app.use(app.router);
    app.engine('html', require('ejs').renderFile);
});


/*
GET ALL SCHEAM's
*/
app.get('/', function(req, res) {
      res.send('SCHEMA_PLACEHOLDER');
});

/*
GET SCHEMA BY ID
*/
app.get('/schema/:id', function(req, res) {
      res.send('SCHEMA_PLACEHOLDER');
});

/*
DELETE SCHEMA BY ID
*/
app.delete('/:id', function(req, res) {
      res.send('SCHEMA_PLACEHOLDER');
});

app.post('/', function(req, res) {
      res.send('SCHEMA_PLACEHOLDER');
});

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
    console.log("App REST Server on " + app_rest_location + ":" + app_rest_port);
});
