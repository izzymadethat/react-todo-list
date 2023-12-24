import { Header, EntryForm, TodoHistory } from "./components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="container">
      <Header />
      <EntryForm addTodo={addTodo} />
      <TodoHistory todoList={todos} />
    </div>
  );
};

export default App;
