import React, { Component } from "react";
import uuid from "uuid";

//Components
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";

class AddEmployee extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    salary: ""
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

    const newEmployee = {
      id: uuid(),
      firstName,
      lastName,
      email,
      phone,
      salary
    };

    dispatch({ type: "ADD_EMPLOYEE", payload: newEmployee });

    // Clear state once submitted
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      salary: ""
    });
  };

  render() {
    const { firstName, lastName, email, phone, salary } = this.state;
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
                  />
                  <TextInputGroup
                    label="Last Name"
                    name="lastName"
                    placeholder="What's the last name?"
                    value={lastName}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="What's the email?"
                    value={email}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Can I get that number?"
                    value={phone}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Salary"
                    name="salary"
                    placeholder="Dollar dollar bills ya'll"
                    value={salary}
                    onChange={this.onChange}
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