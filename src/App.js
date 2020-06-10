import React, {useState} from 'react';
import './App.css';
import Test from "./test"

function App() {
  const myProfession = "MERN Stack Developer"
  return (
    <div className="App">
     Hello From Rana Abid
     Again checking for actions in job CI/CD 
     <Test myName = "Rana Abid" myJob = {myProfession} />
    </div>
  );
}

export default App;
