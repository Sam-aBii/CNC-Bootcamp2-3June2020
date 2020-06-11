import React, { useState } from "react";
import "./App.css";
import Test from "./test";

function App() {
  const myProfession = "MERN Stack Developer";
  let [count,setCount] = useState(1);
  return (
    <div className="App">
      Hello From Rana Abid Again checking for actions in job CI/CD
      <Test myName="Rana Abid" myJob={myProfession} />
      <h2>Update counter state : {count} </h2>
      <br />
      <button onClick={
        () => setCount(count + 1)
      }> Increament </button>
      <br />
      <br />
      <button onClick={
        () => setCount(count - 1)
      }> Increament </button>
     
    </div>
  );
}

export default App;

