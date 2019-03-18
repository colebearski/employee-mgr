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
