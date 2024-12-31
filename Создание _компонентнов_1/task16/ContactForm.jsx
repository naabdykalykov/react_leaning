import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    email: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Имя:', this.state.name);
    console.log('Электронная почта:', this.state.email);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Имя:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Электронная почта:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default ContactForm;