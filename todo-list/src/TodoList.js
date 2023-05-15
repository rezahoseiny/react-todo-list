import React from 'react';

function TodoList(props) {
  const { todos, onTodoClick } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => onTodoClick(todo)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
