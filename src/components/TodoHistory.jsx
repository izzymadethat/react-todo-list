import TodoBox from "./TodoBox";
import TodoHistoryHeader from "./TodoHistoryHeader";

const TodoHistory = () => {
  return (
    <section className="todo-history">
      <TodoHistoryHeader />
      <div className="list-container">
        <TodoBox />
      </div>
    </section>
  );
};

export default TodoHistory;
