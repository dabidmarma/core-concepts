import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = {
    name: "Dabid Marma",
    profession: "Programmer",
  }
  return (
    <div className="App">
      <header className="App-header">
      <h3>I Love React</h3>
      <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  return <h1>My Name Is Dabid Marma</h1>
}

export default App;
