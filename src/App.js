import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import { Provider } from "react-redux";
import Store from "./Store";

import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Browser>
        <Provider store={Store}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/cart" element={<Home />}></Route> */}
          </Routes>
        </Provider>
      </Browser>
    </div>
  );
}

export default App;
