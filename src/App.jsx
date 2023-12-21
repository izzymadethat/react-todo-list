const App = () => {
  return (
    <>
      <div className="container">
        <section className="header">
          <h1>React To-Do List</h1><span style={{fontSize: "2.5rem"}}>&trade;</span>
          <h3>by Isaiah Vickers</h3>
        </section>
        <section className="todo-input">
          <input type="text" name="todoInput" id="todoInput" placeholder="I need to..." />
          <div className="todo-buttons">
            <button>Add to list</button>
            <button>Clear Field</button>
          </div>
        </section>
        <section className="todo-history">
          <div className="todo-history-header">
            <h2>To Do:</h2>
            <hr />
          </div>
          <div className="list-container">
            <div className="to-do">
              <div className="todo-item">
                <div className="todo-item-list">
                  <input type="checkbox" name="" className="todo-check" />
                  <p>Create App</p>
                </div>
                <button>X</button>
              </div>
              <div className="todo-item">
                <p>Build Content </p>
                <button>X</button> 
              </div>
              <div className="todo-item">
                <p>Style App</p>
                <button>X</button> 
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App

