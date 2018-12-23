import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  // usually where HTTP calls
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }
  // // runs before did mount
  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }
  // // runs when component updates
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }
  // //
  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }
  // // when new props received usually with redux to turn piece of state into component prop
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  // }
  // // replaces componentWillReceiveProps
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return { test: 'something' }; // null or state
  // }
  // // before mutations are made eg: DOM
  // getSnapShotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapShotBeforeUpdate');
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
