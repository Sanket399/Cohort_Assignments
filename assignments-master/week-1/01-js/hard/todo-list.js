/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(str) {
    this.todos.push(str);
  }
  remove(i) {
    if (i >= 0 && i < this.todos.length) {
      this.todos.splice(i, 1);
    }
  }
  update(i, str) {
    if (i >= 0 && i < this.todos.length) {
      this.todos[i] = str;
    }
  }
  getAll() {
    return this.todos;
  }
  get(i) {
    if (i >= 0 && i < this.todos.length) {
      return this.todos[i];
    }
    return null;
  }
  clear() {
    this.todos = [];
  }
}

const todoList = new Todo();
todoList.add("bring milk");
todoList.add("read");
todoList.update(1, "exercise");
todoList.remove(2);

console.log(todoList.getAll());
console.log(todoList.get(2));

todoList.add("bring milk");

module.exports = Todo;
