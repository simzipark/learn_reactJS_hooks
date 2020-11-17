import logo from './logo.svg';
import './App.css';
import Hook from "./Hook";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hook />
        <Content />
      </header>
    </div>
  );
}

export default App;
