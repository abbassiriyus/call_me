import logo from './logo.svg';
import './App.css';
import Burxon from './Burxon.js'
import Regi from './Regi.js'
import Api from './Api.js'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Burxon/> */}
      {/* <Regi/> */}
      <Api />
    </div>
  );
}

export default App;
