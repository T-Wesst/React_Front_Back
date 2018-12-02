import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        {/*class componets use this.props.<propName>*/}
        <h4>{this.props.name}</h4>
        <ul>
          <li>{this.props.email}</li>
          <li>{this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
