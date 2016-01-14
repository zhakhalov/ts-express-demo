var express = require('express');
var http = require('http');
var path = require('path');
var indexRoute = require('./routes/index-route');
var apiRoute = require('./routes/api-route');
var app = express();
var rootDir = path.join(__dirname, '..');
app.set('view engine', 'jade');
app.set('views', path.join(rootDir, 'views'));
app.use(express.static(path.join(rootDir, 'public')));
app.use('/', indexRoute);
app.use('/api', apiRoute);
http.createServer(app)
    .listen(8080, '0.0.0.0', function () {
    console.log('Startup');
});
//# sourceMappingURL=app.js.map