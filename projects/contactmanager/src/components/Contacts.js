import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
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
    const { contacts } = this.state;
    return (
      // React.fragment removes unneeded element
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
