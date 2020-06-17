import React, { useState } from "react";
import "./App.css";
import{ Message} from "./Message"
import Test from "./test";
import { Parent } from "./Parent";

function App(props) {
  const myProfession = "MERN Stack Developer";
  let [count, setCount] = useState(1);
  return (
    <div className="App">
      Hello From Rana Abid Again checking for actions in job CI/CD
      <Test myName="Rana Abid" myJob={myProfession} />
       <Message counter = {count} />
      <br />
      <button onClick={() => setCount(++count)}> Increament Button </button>
      <br />
      <br />
      <button onClick={() => setCount(--count)}> Decreament Button </button>
      <Parent name = "Rana Abid" />
    </div>
  );
}

export default App;
