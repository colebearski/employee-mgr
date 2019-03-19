import React, { Component } from "react";
// import uuid from "uuid";
import axios from "axios";

//Components
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";

class EditEmployee extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    salary: "",
    errors: {}
  };

  async componentDidMount() {
    // Get ID from params
    // console.log(this.props);
    const { id } = this.props.match.params;

    const resp = await axios
      .get(`http://localhost:5000/employees/${id}`)
      .then(resp => {
        // console.log(resp);

        const employee = resp.data;

        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
          phone: employee.phone,
          salary: employee.salary
        });
      });
  }

  // Updates state from the form values

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  // Form submit

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    // console.log(this.state);

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

    // Create update object
    const updateEmployee = {
      firstName,
      lastName,
      email,
      phone,
      salary
    };

    // Put request, get ID from url
    const { id } = this.props.match.params;

    axios
      .put(`http://localhost:5000/employees/${id}`, updateEmployee)
      .then(resp => {
        console.log(resp.data);
        dispatch({ type: "UPDATE_EMPLOYEE", payload: resp.data });
      });

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
    window.location.reload();
  };

  render() {
    const { firstName, lastName, email, phone, salary, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Update Employee</div>
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
                    value="Update Employee"
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

export default EditEmployee;
