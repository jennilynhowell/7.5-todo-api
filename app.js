const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./models/todos');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/static', express.static('static'));
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/todos');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

// put routes here
// GET /api/todos/ - return a JSON array of todo items
app.get('/api/todos', (req, res) => {
  Todo.find().then(results => {
    res.json(results);
  })
});

// POST /api/todos/ - post a JSON representation of a todo and have it saved. Returns the saved todo item in JSON.
app.post('/api/todos', (req, res) => {
  let title = req.body.title;
  let addTodo = new Todo(
    {title: title, order: 5}
  );
  addTodo.save().then(function(){
    res.redirect('/');
  });
});

// GET /api/todos[/id] - get a specific todo item.
app.get('/api/todos/:id', (req, res) => {
  let id = req.params.id;
  Todo.findOne({_id: id}).then(result => {
    res.json(result);
  })
});

// PUT /api/todos[/id] - update a todo item. Returns the modified todo item.
app.put('/api/todos/:id', (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  Todo.findOne({_id: id}).then(result => {
    result.title = title;
    result.save().then(function(){
      res.redirect('/');
    });
  })
});

// PATCH /api/todos[/id] - partially update a todo item. Returns the modified todo item.
app.patch('/api/todos/:id', (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  Todo.findOneAndUpdate({_id: id}, {$set: {title: title}}).then(result => {
    res.json(result);
  })
});

// DELETE /api/todos[/id] - deletes a todo item. Returns the todo item that was deleted.
app.delete('/api/todos/:id', (req, res) => {
  console.log('Hey, delete!');
  let id = req.params.id;
  Todo.findOneAndRemove({_id: id}).then(result => {
    res.json(result);
  })
});

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
