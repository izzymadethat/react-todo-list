import { Header, Entry, TodoHistory } from "./components"

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Entry />
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

