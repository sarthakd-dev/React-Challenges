import logo from './logo.svg';
import './App.css';
import { useRef,useState } from "react";
function App() {
  const [showhide, setshowHide] = useState(false);
  const [counter, setCounter] = useState(0);
  const reactLink= useRef(null);
  const togglefxn= ()=>{
    setshowHide(showhide? false: true);
    if(showhide){ 
      alert("aaya");
      while(showhide){
       setCounter(counter +1);
      }
      
    }
    // if(reactLink.current && !showhide){ 
    //   reactLink.current.style.display = "block";
    //   setshowHide(true);
    // }

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Use the timer button to start and stop the clock
        </p>
        <div useRef={reactLink}>{counter}</div>
        <button onClick={() =>togglefxn()}>Start!</button>
      </header>
    </div>
  );
}

export default App;
// export {reactLink};