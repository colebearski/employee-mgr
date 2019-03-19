import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// CSS
import "./../css/employee.css";

// Components
import { Consumer } from "../../Context";
import axios from "axios";

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

  onDeleteClick = async (id, dispatch) => {
    // dispatch({ type: "DELETE_EMPLOYEE", payload: id });
    // Delete request to fake rest api
    await axios.delete(`http://localhost:5000/employees/${id}`).then(resp => {
      console.log(resp);
      dispatch({ type: "DELETE_EMPLOYEE", payload: id });
    });
  };

  render() {
    console.log(this.props);
    // console.log(this.state);
    const { employee } = this.props;
    const { showEmployeeInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {employee.firstName} {employee.lastName}{" "}
                <i
                  onClick={this.onShowClick}
                  className="showBtn fas fa-sort-down"
                />
                <i
                  onClick={this.onDeleteClick.bind(this, employee.id, dispatch)}
                  className="deleteBtn fas fa-times"
                />
                <Link to={`employee/edit/${this.props.employee.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
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
        }}
      </Consumer>
    );
  }
}

// Prop Types
Employee.propTypes = {
  employee: PropTypes.object.isRequired
};

export default Employee;
