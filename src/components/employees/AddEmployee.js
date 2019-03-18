import React, { Component } from "react";
import uuid from "uuid";
import axios from "axios";

//Components
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";

class AddEmployee extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    salary: "",
    errors: {}
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = (dispatch, e) => {
    console.log("hit");
    e.preventDefault();
    console.log(this.state);

    const { firstName, lastName, email, phone, salary } = this.state;

    // Check for errors
    if (firstName === "") {
      this.setState({ errors: { firstName: "First name is required" } });
      return;
    }
    if (lastName === "") {
      this.setState({ errors: { lastName: "Last name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone number is required" } });
      return;
    }
    if (salary === "") {
      this.setState({ errors: { salary: "Salary is required" } });
      return;
    }

    const newEmployee = {
      // id: uuid(),
      firstName,
      lastName,
      email,
      phone,
      salary
    };

    // Post request to fake rest api
    axios.post("http://localhost:3000/employees", newEmployee).then(resp => {
      console.log(resp);
      dispatch({ type: "ADD_EMPLOYEE", payload: resp.data });
    });

    // dispatch({ type: "ADD_EMPLOYEE", payload: newEmployee });

    // Clear state once submitted
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      salary: "",
      errors: {}
    });

    // Redirect
    this.props.history.push("/");
  };

  render() {
    const { firstName, lastName, email, phone, salary, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Employee</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="First Name"
                    name="firstName"
                    placeholder="What's the first name?"
                    value={firstName}
                    onChange={this.onChange}
                    error={errors.firstName}
                  />
                  <TextInputGroup
                    label="Last Name"
                    name="lastName"
                    placeholder="What's the last name?"
                    value={lastName}
                    onChange={this.onChange}
                    error={errors.lastName}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="What's the email?"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Can I get that number?"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextInputGroup
                    label="Salary"
                    name="salary"
                    placeholder="Dollar dollar bills ya'll"
                    value={salary}
                    onChange={this.onChange}
                    error={errors.salary}
                  />
                  <input
                    type="submit"
                    value="Add Employee"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddEmployee;
