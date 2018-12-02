import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="818-818-8188" />
        <Contact
          name="Karren Smith"
          email="karren@gmail.com"
          phone="818-255-2121"
        />
      </div>
    );
  }
}

export default App;
