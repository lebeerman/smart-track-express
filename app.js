var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

const queries = require('./queries');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/users', users);

// Middleware --- all the routing needed for CRUD funcitonality!
// List all the Goals
app.get('/goals', (request, response, next) => {
  queries
    .listGoals()
    .then(goals => {
      response.json({ goals });
    })
    .catch(next);
});
// List a single goal as response
app.get('/goals/:id', (request, response, next) => {
  queries
    .readGoals(request.params.id)
    .then(goals => {
      goals ? response.json({ goals }) : response.sendStatus(404);
    })
    .catch(next);
});
// Add a goal to goals database
app.post('/goals', (request, response, next) => {
  console.log('CREATE ', request.body);
  queries
    .create(request.body)
    .then(goal => {
      response.status(201).json({ goal });
    })
    .catch(next);
});
// remove a goal by ID from the database
app.delete('/goals/:id', (request, response, next) => {
  queries
    .deleteGoal(request.params.id)
    .then(() => {
      response.status(200).json({ message: 'quitter' });
    })
    .catch(next);
});
// update a goal in the database
app.put('/goals/:id', (request, response, next) => {
  queries
    .updateGoal(request.params.id, request.body)
    .then(goal => {
      response.status(200).json({ goal });
    })
    .catch(next);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found: ' + req.originalUrl);
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  if (req.xhr) {
    res.json({ message: err.message, stack: err.stack });
  } else {
    res.render('error', { error: err });
  }
});

module.exports = app;
