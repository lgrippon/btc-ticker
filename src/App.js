import logo from './logo.svg';
import './App.css';
import Bitcoin from "./component/Bitcoin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Bitcoin> </Bitcoin>
      </header>
    </div>
  );
}

export default App;
