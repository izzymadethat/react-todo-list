const TodoItem = ({ task }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-list">
        <input type="checkbox" name="todo-item" className="todo-check" />
        <label htmlFor="todo-item">{task}</label>
      </div>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
