import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [word, setWord] = useState("");
  const test = () => {
    return axios({
      method: "GET",
      url: "/users"
    }).then(result => {
      console.log(result.data);
      setWord(result.data[0].first_name);
    });
  };

  return (
    <div className="App">
      <button onClick={test}>TEST axios</button>
      <p>{word}</p>
    </div>
  );
}

export default App;
