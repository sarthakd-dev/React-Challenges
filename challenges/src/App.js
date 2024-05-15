import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from "react";
var intervalId ;
function App() {
var [running, setrunning] = useState(false);
  var [seconds, setSeconds] = useState(56);
var [minutes, setMinutes] = useState(0);
  const togglefxn= ()=>{
    debugger
    setrunning(running => !running);
     if(!running){
       intervalId = setInterval(() => {
       
       setSeconds(seconds =>seconds +1);
      
       console.log(seconds);
      
    }, 1000); 
  }else{
 // Clear the interval on unmount
 clearInterval(intervalId);
 setrunning(false);
 setMinutes(0);
 setSeconds(0);
  //   return () => clearInterval(intervalId);
  // }, []); 
  }
   

  }
  useEffect(() => {
    return () => {
      if(seconds>59){
        setSeconds(0);
         setMinutes(minutes =>minutes +1);
       }
    };
  }, [seconds]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Use the timer button to start and stop the clock
        </p>
        <div>{minutes}min</div><div >{seconds}sec</div>
        <button style={{cursor: "pointer"}} onClick={() =>togglefxn()}>Start!</button>
      </header>
    </div>
  );
}

export default App;
// export {reactLink};