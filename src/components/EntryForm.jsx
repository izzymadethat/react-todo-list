import { useState } from "react";

const EntryForm = ({ addTodo }) => {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(textValue);
    setTextValue("");
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="I need to..."
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default EntryForm;
