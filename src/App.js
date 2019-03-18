import React, { Component } from "react";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Employees from "./components/Employees";
import Header from "./components/Header";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Employee Manager" />
          <div className="container">
            <Employees />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
