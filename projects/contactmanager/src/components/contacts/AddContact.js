import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = {
      name,
      email,
      phone,
      id: uuid()
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
    // clear state
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Add Contact
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        placeholder="enter name"
                        className="form-control form-control-lg"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        placeholder="enter email"
                        className="form-control form-control-lg"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        placeholder="enter phone"
                        className="form-control form-control-lg"
                        value={phone}
                        name="phone"
                        onChange={this.onChange}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-block btn-dark"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
