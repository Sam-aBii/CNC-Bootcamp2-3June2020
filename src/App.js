import React, { useState } from "react";
import "./App.css";
import Test from "./test";

function App() {
  const myProfession = "MERN Stack Developer";
  let [ count, setCount ] = useState(0);
  return (
    <div className="App">
      Hello From Rana Abid Again checking for actions in job CI/CD
      <Test myName="Rana Abid" myJob={myProfession} />
      <h2>Value of counter variable is:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Counter Number</button>
      <br />
      <br /> 
      <button onClick = {() => setCount(count - 1)}> decrement  </button>
    </div>
  );
}

export default App;
