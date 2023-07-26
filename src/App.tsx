import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [textlines, settextlines] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const loop = () => {
    setTimeout(() => {
      let textpush = document.getElementById("msg").value;
      const newline = textpush.trim();
      settextlines([...textlines, newline]);
      setInputValue("");
    }, 450);
  };

  const removeline = () => {
    setTimeout(() => {
      const remove = [...textlines];
      remove.pop();
      settextlines(remove);
    }, 450);
  };

  const enter = (event) => {
    if (event.key === "Enter") {
      loop();
    }
  };

  return (
    <div className="App">
      <h1>Chat Test Alpha</h1>
      <h2>Developing something interesting!</h2>
      <div className="chatbox">
        <input
          className="bar"
          id="msg"
          type="text"
          placeholder="Write something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={enter}
        ></input>
      </div>
      <button className="send" id="send" onClick={loop}>
        Send
      </button>
      <div className="textbox">
        {textlines.map((line, index) => (
          <p className="messages" key={index} id="messages">
            {line}
          </p>
        ))}
      </div>

      <button className="delete" id="delete" onClick={removeline}>
        DELETE LAST MESSAGE
      </button>
    </div>
  );
}
