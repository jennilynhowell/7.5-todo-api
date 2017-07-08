const mongoose = require('mongoose');

// id: 1, title: "Mow the lawn", order: 1, completed: false
const todoSchema = new mongoose.Schema({
  title: String,
  order: Number,
  completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
