import React, { Component } from "react";
import PropTypes from "prop-types";

// CSS
import "./css/employees.css";

class Employees extends Component {
  render() {
    const { firstName, lastName, email, phone, salary } = this.props;

    return (
      <div className="card card-body mb-3">
        <h4>
          {firstName} {lastName}
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
          <li className="list-group-item">Salary: {salary}</li>
        </ul>
      </div>
    );
  }
}

// Prop Types
Employees.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired
};

export default Employees;
