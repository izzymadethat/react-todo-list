import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleTextInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      task: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update to..."
            value={input}
            onChange={handleTextInput}
            ref={inputRef}
            name="text"
            className="todo-input edit"
          />

          <button className="todo-button edit">Update Task</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="I need to..."
            value={input}
            onChange={handleTextInput}
            ref={inputRef}
            name="text"
            className="todo-input"
          />

          <button className="todo-button">Add Task</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
