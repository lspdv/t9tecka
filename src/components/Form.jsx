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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getMatchesFromConvertedNumbers = this.getMatchesFromConvertedNumbers.bind(this);
    
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

  getMatchesFromConvertedNumbers(data) {
    try {
      const item = data[0].map((item, idx) => <span key={idx} style={{padding: '0 5px'}}>{item}</span>)
      return item;
    } catch (error) {
        console.log('Error in getting pairs of letters.', error)
    }
  }

  render() {
    const { data } = this.state;
    console.log(data, 'dafuck')
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
                      Write some numbers, yo?
                    </blockquote>
                    <blockquote>{(data) ? this.getMatchesFromConvertedNumbers(data) : "I will show you their matches."}</blockquote>                                       
                  </div>
                </div>
                <a title="Go to Github to see the source code." href="https://github.com/lspdv/t9tecka">
                  <div className="home-button home-button-easter-egg"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
