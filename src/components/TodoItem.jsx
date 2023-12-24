const TodoItem = ({ task, toggleComplete }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-list">
        <p
          className={`${task.completed ? "todo-item completed" : "todo-item"}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
      </div>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
