import EntryButton from "./EntryButton";
import { useState } from "react";

const Entry = () => {
  const [text, setText] = useState("");
  const [buttonClick, setButtonClick] = useState(false);

  function handleTextInput(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  function handleButtonClick(buttonType) {
    if (buttonType === "addToList" && text) {
      console.log(text);
    } else if (buttonType === "clearField" && text) {
      setText("");
      console.log("Text removed");
    }

    setButtonClick(!buttonClick);
  }

  return (
    <section className="todo-input">
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="I need to..."
        value={text}
        onChange={(e) => handleTextInput(e)}
      />
      <div className="todo-buttons">
        <EntryButton
          buttonText="Add to list"
          onClick={() => handleButtonClick("addToList")}
        />
        <EntryButton
          buttonText="Clear Field"
          onClick={() => handleButtonClick("clearField")}
        />
      </div>
    </section>
  );
};

export default Entry;
