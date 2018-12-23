import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@yahoo.com',
    phone: '777-777-7777'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="enter name"
                  className="form-control form-control-lg"
                  name="name"
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="enter email"
                  className="form-control form-control-lg"
                  name="email"
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="enter phone"
                  className="form-control form-control-lg"
                  defaultValue={phone}
                  name="phone"
                  ref={this.phoneInput}
                />
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-block btn-dark"
                onSubmit={this.onSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddContact;
