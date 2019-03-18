import React, { Component } from "react";
import Employee from "./Employee";
import { Consumer } from "../Context";

class Employees extends Component {
  deleteContact = id => {
    // Takes employees from state, destructuring. Instead of calling this.state.employees
    const { employees } = this.state;
    // Filter f(x) to call 'new' state and filter out deleted state
    const newEmployees = employees.filter(employee => employee.id !== id);
    // Sets the new filtered state
    this.setState({
      employees: newEmployees
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { employees } = value;
          console.log(value);

          return (
            <React.Fragment>
              {employees.map(employee => (
                <Employee
                  key={employee.id}
                  employee={employee}
                  deleteClickHandler={this.deleteContact.bind(
                    this,
                    employee.id
                  )}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Employees;
