import TodoItem from "./TodoItem";

const TodoBox = () => {
  return (
    <div className="to-do">
      <TodoItem task="Create App" />
      <TodoItem task="Build App" />
      <TodoItem task="Style App" />
      <TodoItem task="Release App" />
    </div>
  );
};

export default TodoBox;
