import React, { useState } from 'react';

function AddTodoForm(props) {
  const { onAddTodo } = props;
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo({
      id: Date.now(),
      text,
      completed: false,
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
