var express = require('express');
var swaggerUi = require('swagger-ui-express');
var YAML = require('yamljs');

var app = express();
var swaggerDocument = YAML.load('./api/openapi.yaml');

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(8080, function () {
    console.log('Your server is listening on port 8080 (http://localhost:8080)');
});
