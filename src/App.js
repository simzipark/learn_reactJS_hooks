import logo from './logo.svg';
import './App.css';
import Hook from "./component/Input";
import Content from "./component/Content";
import Effect from "./component/Effect";
import Title from './component/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Learn React Hooks💜</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>🍒 useState 1 : Input</h3>
        <Input />
        <h3>🍋 useState 2 : Button</h3>
        <Content />
        <h3>🍊 useEffect 1 : Button</h3>
        <Effect />
        <h3>🥭 useEffect 2 : Browser Title</h3>
        <Title />
      </header>
    </div>
  );
}

export default App;
