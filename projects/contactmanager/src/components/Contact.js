import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, phone, email } = this.props;
    return (
      <div>
        {/*class componets use this.props.<propName>*/}
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
