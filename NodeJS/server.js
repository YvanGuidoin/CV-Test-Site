const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['cassandra-db-alias'], keyspace: 'resumes' })

const DOMAIN_CROS = process.env.DOMAIN_CROS || "*";

var app = express();

// middleware to test authentication
var myAuthenticate = function(req, res, next) {
    if(!req.body.username || !req.body.password) res.sendStatus(401);
<<<<<<< HEAD:NodeJS/code/server.js
    const query = 'SELECT userid, pseudo, password FROM users WHERE pseudo=?';
    client.execute(query, [ req.body.username ], { prepare: true }, function(err, result){
      if(err) res.sendStatus(500);
      else if(!result) res.sendStatus(403);
      else if(result.rows[0].password == req.body.password){
        next();
      }
      else res.sendStatus(403);
    });
=======
    else {
      const query = 'SELECT userid, pseudo, password FROM users WHERE pseudo=?';
      client.execute(query, [ req.body.username ], { prepare: true }, function(err, result){
        if(err) res.sendStatus(500);
        if(!result) res.sendStatus(403);
        if(result.rows[0].password == req.body.password){
          next();
        }
        else res.sendStatus(403);
      });
    }
>>>>>>> 9d292825eac17951eb2cf9fd65c7701f714ac516:NodeJS/server.js
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", DOMAIN_CROS);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, if-none-match");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
  next();
});

app.post('/login', jsonParser, function(req, res) {
  if(!req.body.username || !req.body.password) res.sendStatus(400);
  const query = 'SELECT userid, pseudo, password FROM users WHERE pseudo=?';
  client.execute(query, [ req.body.username ], { prepare: true }, function(err, result){
    if(err) res.sendStatus(500);
    else if(!result) res.sendStatus(403);
    else if(result.rows[0].password == req.body.password){
      res.status(200).json({
        userid: result.rows[0].userid,
        username: result.rows[0].pseudo,
        password: result.rows[0].password
      });
    }
    else res.sendStatus(403);
  });
});

app.get('/users', function(req, res) {
  const query = 'SELECT userid, name, surname, presentation, keywords FROM users';
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
      else if(result.rows.length > 0) res.status(200).json({ usernameTaken: true });
      else {
        client.execute(queryCreate, [ req.body.username, req.body.password ], { prepare: true }, function(err2, result2){
            if(err2) res.sendStatus(500);
            else res.status(200).json({ username: req.body.username, password: req.body.password });
        });
      }
    });
});

app.put('/users/:id', jsonParser, myAuthenticate, function(req, res) {
    // correct the fromJson('null') from Cassandra
    if(!req.body.past_jobs) req.body.past_jobs = [];
    if(!req.body.qualifications) req.body.qualifications = [];
    if(!req.body.keywords) req.body.keywords = [];
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
      else res.status(200).json(result);
    });
});

app.post('/users/delete/:id', jsonParser, myAuthenticate, function(req, res) {
  const query = 'DELETE FROM users WHERE userid=?';
  client.execute(query, [ req.params.id ], { prepare: true }, function(err, result) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/users/:id', function(req, res) {
    const query = 'SELECT userid, name, surname, birthdate, gender, address, presentation, past_jobs, qualifications, keywords FROM users WHERE userid=?';
    client.execute(query, [ req.params.id ], { prepare: true }, function(err, result) {
<<<<<<< HEAD:NodeJS/code/server.js
      if(err) console.log(err);
      else if(result){
=======
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      if(result){
>>>>>>> 9d292825eac17951eb2cf9fd65c7701f714ac516:NodeJS/server.js
        if(result.rows[0]) res.json(result.rows[0]);
      }
    });
});

app.get('/', function (req, res) {
  res.send("Up and running");
});

app.listen(process.env.PORT || 8080);
console.log('Running');
