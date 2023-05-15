import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const handleTodoClick = (todo) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          completed: !t.completed,
        };
      }
      return t;
    });
    setTodos(newTodos);
  };

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onTodoClick={handleTodoClick} />
      <AddTodoForm onAddTodo={handleAddTodo} />
    </div>
  );
}


export default App;
