import { useState } from "react";
import React from "react";
import "./ShoppingCart.sass";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
const ShoppingCart = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = () => {};

  const handleToggle = () => {};

  return (
    <div className="ShoppingCart">
      <div>
        <h1>Список продуктов {todos.length}</h1>
      </div>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
};

export default ShoppingCart;
