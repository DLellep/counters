import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Counter = (props) => {

 const [counter, setCounter] = useState(0) ; // muutuja ja muutuja “setter” (algväärtus)
 const updateCounter = (updated) => { setCounter(updated) } // funktsioon
  
 return ( 
    <div>

    <p> Step changes by {props.step}</p>
      <div>
      <button onClick={function(){updateCounter(Math.max(counter - props.step, 0))}}>-</button>
      <p class ="decimal">
        {Math.round((counter*10))/10}
        </p>
      <button onClick={function(){updateCounter(Math.min(counter + props.step, 10))}}>+</button>
      </div>
      
  </div>
   )
 }
 

const App = () => {
  return (
    // annavad stepi väärtuse
    <main>
      <h1>Counters</h1>
      <Counter step={1}></Counter>
      <Counter step={2}></Counter>
      <Counter step={0.1}></Counter>
    </main>
  );
  };

ReactDOM.render(<App />, document.getElementById("root"));
