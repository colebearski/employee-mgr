import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Employees from "./components/employees/Employees";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddEmployee from "./components/employees/AddEmployee";
import EditEmployee from "./components/employees/EditEmployee";
import NotFound from "./components/pages/NotFound";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Employee Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Employees} />
                <Route exact path="/employee/add" component={AddEmployee} />
                <Route
                  exact
                  path="/employee/edit/:id"
                  component={EditEmployee}
                />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
