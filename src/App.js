import React from "react"; /* импортируем из модуля */
/* import logo from "./logo.svg"; */
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Content />
    </div>
  );
};

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
} */

export default App;
