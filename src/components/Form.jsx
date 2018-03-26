import React, { Component } from 'react';

import { getCombinations } from '../api/t9-api';
import './Form.scss';
import '../grid.scss';

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
    event.preventDefault();
    getCombinations(this.state.inputValue).then(result => {
      this.setState({ data: result, loading: true });
    });
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="view-small view-grid">
              <div className="phone">
                <div className="camera"></div>
                <div className="speaker"></div>
                <div className="buttons"></div>
                <div className="screen">
                  <div className="bar">
                    <div className="bar-wrap">
                      <form onSubmit={this.handleSubmit}>
                        <input
                          className="input no-spinners"
                          type="number"
                          onChange={value => this.handleChange(value)}
                          pattern="[0-9]*"
                        />
                      </form>
                    </div>
                  </div>
                  <div className="quote-wrap">
                    <blockquote>
                      Write something, yo?
                    </blockquote>
                    <blockquote>{data}</blockquote>
                  </div>
                </div>
                <div className="home-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
