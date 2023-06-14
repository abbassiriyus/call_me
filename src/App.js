import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import SignUp from "./Signup";
import Api from "./Api";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/api" Component={Api} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
