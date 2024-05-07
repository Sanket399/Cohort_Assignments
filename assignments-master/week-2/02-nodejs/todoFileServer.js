const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const todosPath = path.join(__dirname, "todos.json");

let todos = [];

fs.readFile(todosPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading todo file", err);
    return;
  }

  try {
    todos = JSON.parse(data);
  } catch (err) {
    console.error("Error parsing todo file", err);
    return;
  }
});

function saveTodosToFile() {
  fs.writeFile(todosPath, JSON.stringify(todos, null, 2), (err) => {
    if (err) {
      console.error("Error writing todo file", err);
    }
  });
}

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.post("/todos", (req, res) => {
  const { title, description } = req.body;
  const id = uuidv4();
  const newTodo = { id, title, completed: false, description };
  todos.push(newTodo);
  saveTodosToFile();
  res.status(201).json({ id });
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id === id); // find index of the todo item with the id matching the id provided by user
  const { title, completed } = req.body;
  if (index !== -1) {
    // findIndex returns -1 if item is not found, so this condition checks if item is present in array
    todos[index].title = title;
    todos[index].completed = completed;
    saveTodosToFile();
    res.status(200).json(todos[index]);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    saveTodosToFile();
    res.status(200).json({ msg: "Todo deleted" });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});
