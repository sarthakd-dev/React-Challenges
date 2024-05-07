import logo from './logo.svg';
import './App.css';
import { useRef,useState } from "react";
function App() {
  const [showhide, setshowHide] = useState(true);
  const reactLink= useRef(null);
  const togglefxn= ()=>{
    if(reactLink.current && showhide){ 
      reactLink.current.style.display = "none";
      setshowHide(false);
    }
    if(reactLink.current && !showhide){ 
      reactLink.current.style.display = "block";
      setshowHide(true);
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a ref={reactLink}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() =>togglefxn()}>Toggle above link!</button>
      </header>
    </div>
  );
}

export default App;
// export {reactLink};