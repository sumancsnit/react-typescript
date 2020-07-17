import React from 'react';

import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { onDeleteTodo, items } = props;
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span> {todo.text} </span>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
