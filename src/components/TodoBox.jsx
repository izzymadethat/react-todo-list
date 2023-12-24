import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoBox = ({ todos }) => {
  const [todoList, setTodosState] = useState(todos);

  const toggleComplete = (id) => {
    setTodosState(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="to-do">
      {todoList.map((todo, index) => (
        <TodoItem task={todo} key={index} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoBox;
