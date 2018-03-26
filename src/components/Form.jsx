import React, { Component } from 'react';

import { getCombinations } from '../api/t9-api';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: null,
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('sending from form', this.state.inputValue)
    getCombinations(this.state.inputValue).then(result => {
      this.setState({ data: result, loading: true });
      console.log(this.state.data)   
    });
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="number_input"
            type="number"
            onChange={(value) => this.handleChange(value)}
          />
          <input type="submit" className="submit_button" />
        </form>
        <div>Here the data will appear {data}</div>
      </div>
    );
  }
}
