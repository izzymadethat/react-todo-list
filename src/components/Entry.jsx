import EntryButton from "./EntryButton"

const Entry = () => {
  return (
    <section className="todo-input">
        <input type="text" name="todoInput" id="todoInput" placeholder="I need to..." />
        <div className="todo-buttons">
            <EntryButton buttonText="Add to list"/>
            <EntryButton buttonText="Clear Field"/>
        {/* <button>Add to list</button>
        <button>Clear Field</button> */}
        </div>
    </section>
  )
}

export default Entry