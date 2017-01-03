const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const cookieParser = require('cookie-parser')
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['cassandra-db-alias'], keyspace: 'resumes' })

const DOMAIN = process.env.DOMAIN || "http://localhost";

var app = express();

// middleware to test authentication
var myAuthenticate = function(req, res, next) {
    console.log("Middleware Cookies:");
    console.log(req.cookies);
    next();
};

app.use(cookieParser())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", DOMAIN);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
  next();
});

app.post('/login', jsonParser, function(req, res) {
  if(!req.body.username || !req.body.password) res.sendStatus(400);
  const query = 'SELECT userid, pseudo, password FROM users WHERE pseudo=?';
  client.execute(query, [ req.body.username ], { prepare: true }, function(err, result){
    if(err) res.sendStatus(500);
    if(!result) res.sendStatus(403);
    if(result.rows[0].password == req.body.password){
      var credentials = {
        userid: result.rows[0].userid,
        username: result.rows[0].pseudo,
        password: result.rows[0].password
      };
      res.cookie('credentials', credentials).status(200).json(credentials);
    }
    else res.sendStatus(403);
  });
});

app.post('/logout', function(req, res) {
  console.log("Cookies avant logout:");
  console.log(req.cookies);
  res.clearCookie('credentials').status(200).json({ logout: true });
  console.log("Cookies apres logout:");
  console.log(req.cookies);
});

app.get('/users', function(req, res) {
  const query = 'SELECT userid, name, surname, birthdate, gender, address, presentation, past_jobs, qualifications, keywords FROM users';
  client.execute(query, [], function(err, result) {
    if(err) console.log(err);
    res.json(result.rows);
  });
});

app.post('/users', jsonParser, function(req, res) {
    const queryUser = 'SELECT pseudo FROM users WHERE pseudo=?';
    const queryCreate = 'INSERT INTO users (userid, pseudo, password) VALUES (now(), ?, ?)';
    client.execute(queryUser, [ req.body.username ], { prepare: true }, function(err, result){
      if(err) res.sendStatus(500);
      if(result.rows.length > 0) res.status(200).json({ usernameTaken: true });
      else {
        client.execute(queryCreate, [ req.body.username, req.body.password ], { prepare: true }, function(err2, result2){
            if(err2) res.sendStatus(500);
            else res.status(200).json({ username: req.body.username, password: req.body.password });
        });
      }
    });
});

app.put('/users/:id', myAuthenticate, jsonParser, function(req, res) {
    const query = 'UPDATE users SET name = \'' + req.body.name + '\', '
     + 'surname = \'' + req.body.surname + '\', '
     + 'birthdate = \'' + req.body.birthdate + '\', '
     + 'gender = \'' + req.body.gender + '\', '
     + 'address = \'' + req.body.address + '\', '
     + 'presentation = \'' + req.body.presentation + '\', '
     + 'past_jobs = fromJson(\'' + JSON.stringify(req.body.past_jobs) + '\'), '
     + 'qualifications = fromJson(\'' + JSON.stringify(req.body.qualifications) + '\'), '
     + 'keywords = fromJson(\'' + JSON.stringify(req.body.keywords) + '\') '
     + 'WHERE userid=? IF EXISTS';
    client.execute(query, [ req.params.id ], { prepare: true }, function(err, result) {
      if(err) {
        console.log(err);
        res.status(500).json(err);
      }
      if(result){
        res.status(200).json(result);
      }
    });
});

app.get('/users/:id', function(req, res) {
    const query = 'SELECT userid, name, surname, birthdate, gender, address, presentation, past_jobs, qualifications, keywords FROM users WHERE userid=?';
    client.execute(query, [ req.params.id ], { prepare: true }, function(err, result) {
      if(err) console.log(err);
      if(result){
        if(result.rows[0]) res.json(result.rows[0]);
      }
    });
});

app.get('/', function (req, res) {
  res.send("Up and running");
});

app.listen(process.env.PORT || 8080);
console.log('Running');
