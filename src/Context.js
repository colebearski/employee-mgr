import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  // Evalue action types
  switch (action.type) {
    case "DELETE_EMPLOYEE":
      return {
        // Filters out the ID which is sent thru payload
        ...state,
        employees: state.employees.filter(
          employee => employee.id !== action.payload
        )
      };
    case "ADD_EMPLOYEE":
      return {
        // Return an object and the initial state
        ...state,
        employees: [action.payload, ...state.employees]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    employees: [
      {
        id: 1,
        firstName: "Bob",
        lastName: "Dylan",
        email: "mustang@gmail.com",
        phone: "444-444-4444",
        salary: "$100,000"
      },
      {
        id: 2,
        firstName: "Eddie",
        lastName: "Van Halen",
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
