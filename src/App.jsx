// create a todo list application with an input field, add button, checkbox for each item to update done todos and delete button for each todo item
import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/input/Input";
import { Button } from "./components/button/Button";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  const addTodo = () => {
    if (todo === "") {
      setError(true);
    } else {
      setError(false);
      setTodos([...todos, { text: todo, done: false }]);
      setTodo("");
    }
  };

  const updateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const renderEmptyTodos = () => {
    return <p>There are no todos</p>;
  };

  const renderTodoList = () => {
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <label className={`checkbox ${todo.done ? "done" : ""}`}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => updateTodo(index)}
              />
              <span>{todo.text}</span>
            </label>
            <Button onClick={() => deleteTodo(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <main className="main-app">
      <h1>Todo List</h1>
      <Input
        placeholder="Enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        error={error}
        errorMessage="Please enter a todo"
      />
      <Button onClick={addTodo}>Add</Button>
      {todos.length === 0 ? renderEmptyTodos() : renderTodoList()}
    </main>
  );
};

export default App;
