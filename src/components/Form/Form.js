import React, { Component } from 'react';

const initialState = {
  name: '',
  number: ''
}
class Form extends Component {

  state = {
    name: '',
    number: ''
  }

  addContactHandler = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.resetInputs()
  };

  changeHandler = event => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value });
  }

  resetInputs = () => {
    this.setState(initialState)
  }

  render() {
    return (
      <form onSubmit={this.addContactHandler}>
        <label>Name
            <input name='name' type='text' value={this.state.name} onChange={this.changeHandler}></input>
        </label>
        <label>Number
            <input name='number' type='tel' value={this.state.number} onChange={this.changeHandler}></input>
        </label>
        <button type='submit'>Add contact</button>
      </form>
    )
  }
}

export default Form;
