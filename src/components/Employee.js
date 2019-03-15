import React, { Component } from "react";
import PropTypes from "prop-types";

// CSS
import "./css/employee.css";

class Employee extends Component {
  state = {
    showEmployeeInfo: false
  };

  onShowClick = e => {
    // console.log(e.target);
    this.setState({
      showEmployeeInfo: !this.state.showEmployeeInfo
    });
  };

  render() {
    console.log(this.props);
    const { employee } = this.props;
    const { showEmployeeInfo } = this.state;
    console.log(this.state);

    return (
      <div className="card card-body mb-3">
        <h4>
          {employee.firstName} {employee.lastName}{" "}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>

        {showEmployeeInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {employee.email}</li>
            <li className="list-group-item">Phone: {employee.phone}</li>
            <li className="list-group-item">Salary: {employee.salary}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

// Prop Types
Employee.propTypes = {
  employee: PropTypes.object.isRequired
};

export default Employee;
