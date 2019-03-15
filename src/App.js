import React, { Component } from "react";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Employees from "./components/Employees";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Employee Manager" />
        <div className="container">
          <Employees />
          {/* <Employee
            firstName="John"
            lastName="Doe"
            email="john@gmail.com"
            phone="111-222-3333"
            salary="$500,000"
          />
          <Employee
            firstName="Greg"
            lastName="G Thug"
            email="abraham@gmail.com"
            phone="111-222-4444"
            salary="$100,000"
          />
          <Employee
            firstName="Jenny"
            lastName="Lamb"
            email="lamblamb@gmail.com"
            phone="111-222-6666"
            salary="$600,000"
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
