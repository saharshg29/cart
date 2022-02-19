import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home></Home>
    </div>
  );
}

export default App;