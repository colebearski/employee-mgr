import React, { Component } from "react";
import Employee from "./Employee";
import { Consumer } from "../../Context";

class Employees extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { employees } = value;
          console.log(value);

          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Employee</span> List
              </h1>
              {employees.map(employee => (
                <Employee key={employee.id} employee={employee} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Employees;
