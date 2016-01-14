import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

import * as indexRoute from './routes/index-route';
import * as apiRoute from './routes/api-route';

const app = express();
const rootDir = path.join(__dirname, '..'); // beacuse our application actually running from .bin folder

// ------------------------------------------------------------ setup views
app.set('view engine', 'jade');
app.set('views', path.join(rootDir, 'views'));

// ------------------------------------------------------------ setup middlewares

app.use(express.static(path.join(rootDir, 'public')));

// ------------------------------------------------------------ setup routes
app.use('/', indexRoute);
app.use('/api', apiRoute);

http.createServer(app)
  .listen(8080, '0.0.0.0', () => {
    console.log('Startup');
  });
