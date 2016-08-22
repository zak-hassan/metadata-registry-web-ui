var express = require('express');
var app = express();

var app_rest_location = process.env.OPENSHIFT_APP_REST || '10.16.40.63';
var app_rest_port = process.env.OPENSHIFT_APP_REST_PORT || '80';
var app_web_debug = process.env.OPENSHIFT_APP_WEB_DEBUG || false;
var metadata_registry_api = process.env.METAREGISTRY_SERVICE_HOST +":18080"

 app.configure(function() {
    app.use(express.logger());
    app.set('views', __dirname + '/');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/'));
    app.use('/bower_components',  express.static(__dirname + '/bower_components'));
    app.use(app.router);
    app.engine('html', require('ejs').renderFile);
});


/*
GET ALL SCHEAM's
*/
app.get('/api/', function(req, res) {

      res.send('SCHEMA_PLACEHOLDER');
});

/*
GET SCHEMA BY ID
*/
app.get('/api/schema/:id', function(req, res) {
      res.send('SCHEMA_PLACEHOLDER');
});

/*
DELETE SCHEMA BY ID
*/
app.delete('/api/schema/:id', function(req, res) {
      res.send('SCHEMA_PLACEHOLDER');
});

app.post('/api/schema', function(req, res) {
      res.send('SCHEMA_PLACEHOLDER');
});

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
    console.log("App REST Server on " + app_rest_location + ":" + app_rest_port);
});
