import React, { Component } from "react";
import axios from "axios";

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
    employees: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const resp = await axios
      .get("http://localhost:3000/employees")
      .then(resp => {
        console.log(resp.data);
        this.setState({
          employees: resp.data
        });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
