const mongoose = require('mongoose');
const Todo = require('./models/todos');

mongoose.connect('mongodb://localhost:27017/todos');

let todo1 = new Todo(
  {title: 'Cook dinner', completed: false, order: 1}
);

let todo2 = new Todo(
  {title: 'Walk dog', completed: false, order: 3}
);

let todo3 = new Todo(
  {title: 'Laundry', completed: false, order: 2}
);

let todo4 = new Todo(
  {title: 'Vacuum', completed: true, order: 4}
);

todo1.save();
todo2.save();
todo3.save();
todo4.save();
