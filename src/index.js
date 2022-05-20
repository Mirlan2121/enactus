import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import ls from "local-storage";
import { BrowserRouter } from "react-router-dom";

function App() {
  ls.set("itemCount", 0);
  return (
    <div id="App">
      <BrowserRouter>
        <NavDrawer />
      </BrowserRouter>
      {/* <Homepage /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
