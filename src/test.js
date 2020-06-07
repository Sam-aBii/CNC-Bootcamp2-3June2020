import React from "react";


function Test (props){
    return(
    <div>
     <h1>Today we are learning React</h1>
     <h2>A very small intro about Props State etc</h2>
     <h3>{props.myName}</h3>
     <h4>{props.myJob}</h4>
     <h3>{props.myName1}</h3>
     <h4>{props.myJob}</h4>

    </div>
        
    )
}


export default Test;