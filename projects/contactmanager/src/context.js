import React, { Component } from "react";
const Context = React.createContext();
export class Provider extends Component {
  // global state
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "818-818-8118"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "karen@gmail.com",
        phone: "818-224-3234"
      },
      {
        id: 3,
        name: "Mike Myers",
        email: "mike@gmail.com",
        phone: "818-211-1122"
      }
    ]
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
