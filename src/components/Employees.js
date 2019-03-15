import React, { Component } from "react";
import Employee from "./Employee";

class Employees extends Component {
  state = {
    employees: [
      {
        id: 1,
        firstName: "Henry",
        lastName: "Ford",
        email: "mustang@gmail.com",
        phone: "444-444-4444",
        salary: "$100,000"
      },
      {
        id: 2,
        firstName: "Bill",
        lastName: "Gates",
        email: "microsoft@gmail.com",
        phone: "555-555-5555",
        salary: "$200,000"
      },
      {
        id: 3,
        firstName: "Elon",
        lastName: "Musk",
        email: "tesla@gmail.com",
        phone: "777-777-7777",
        salary: "$300,000"
      }
    ]
  };

  render() {
    const { employees } = this.state;
    return (
      <React.Fragment>
        {employees.map(employee => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </React.Fragment>
    );
  }
}

export default Employees;
