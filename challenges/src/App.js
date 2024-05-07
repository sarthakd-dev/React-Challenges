import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from "react";
var intervalId ;
function App() {
var [running, setrunning] = useState(false);
  var [counter, setCounter] = useState(0);
 
  const togglefxn= ()=>{
    debugger
    setrunning(running => !running);
     if(!running){
       intervalId = setInterval(() => {
       setCounter(counter =>counter +1);
       console.log(counter);
      
    }, 1000); 
  }else{
    alert("20lac package!");
 // Clear the interval on unmount
 clearInterval(intervalId);
 setrunning(false);
 setCounter(0);
  //   return () => clearInterval(intervalId);
  // }, []); 
  }
   

  }
  useEffect(() => {
    return () => {
      if (running) {
        clearInterval(intervalId);
      }
    };
  }, [running]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Use the timer button to start and stop the clock
        </p>
        <div >{counter}</div>
        <button style={{cursor: "pointer"}} onClick={() =>togglefxn()}>Start!</button>
      </header>
    </div>
  );
}

export default App;
// export {reactLink};