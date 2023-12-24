import TodoBox from "./TodoBox";
import TodoHistoryHeader from "./TodoHistoryHeader";

const TodoHistory = ({ todoList }) => {
  return (
    <section className="todo-history">
      <TodoHistoryHeader />
      <div className="list-container">
        <TodoBox todos={todoList} />
      </div>
    </section>
  );
};

export default TodoHistory;
