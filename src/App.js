import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import { Provider } from "react-redux";
import Store from "./Store";

import { BrowserRouter as Browser } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      {console.log("app rendered")}
      {/* <Browser> */}
        {/* <Provider store={Store}> */}
          <Nav />
          <Home />
        {/* </Provider> */}
      {/* </Browser> */}
    </div>
  );
}

export default App;
