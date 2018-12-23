import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: 'test'
  };

  // usually where HTTP calls
  componentDidMount() {
    console.log('componentDidMount...');
  }
  // runs before did mount
  componentWillMount() {
    console.log('componentWillMount...');
  }
  // runs when component updates
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  //
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  // when new props received usually with redux to turn piece of state into component prop
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps');
  }
  // replaces componentWillReceiveProps
  static getDerivedStateFromProps(nextProps, prevState) {
    return { test: 'something' }; // null or state
  }
  // before mutations are made eg: DOM
  getSnapShotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapShotBeforeUpdate');
  }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}
export default Test;
