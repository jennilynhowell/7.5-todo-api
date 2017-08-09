# 7.5-todo-api
TIY Week 7, Day 5: Make a simple database + api endpoints.

#### This project was back-end only; the front end was provided as part of the assignment. I was required to create the following endpoints:

GET /api/todos/ - return a JSON array of todo items

POST /api/todos/ - post a JSON representation of a todo and have it saved. Returns the saved todo item in JSON.

GET /api/todos[/id] - get a specific todo item.

PUT /api/todos[/id] - update a todo item. Returns the modified todo item.

PATCH /api/todos[/id] - partially update a todo item. Returns the modified todo item.

DELETE /api/todos[/id] - deletes a todo item. Returns the todo item that was deleted.

The JSON form of the todos sent back and forth via the JSON API looks like this:

{id: 1, title: "Mow the lawn", order: 1, completed: false}

The ID can be any unique ID, and it will not be sent when posting a new todo.

This project includes a skeleton for your project containing all the front-end code you will need and an Express app to serve it. Your job will be to implement the specified API in Express. You may store the todo information using either Sequelize or Mongoose.
