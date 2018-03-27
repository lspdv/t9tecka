import React, { Component } from 'react';

import { getCombinations } from '../api/t9-api';
import { Spinner } from './Spinner'

import './Device.scss';
import '../grid.scss';

export class Device extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: null,
      inputValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getMatchesFromConvertedNumbers = this.getMatchesFromConvertedNumbers.bind(this);   
  }

  handleSubmit(event) {
    const { inputValue } = this.state;    
    event.preventDefault();
    this.setState({ loading: true });

    getCombinations(inputValue).then(result => {
      this.setState({ data: result, loading: false });    
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
    const { data, loading } = this.state;
    console.log(data); 
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
                          type="text"
                          className="input no-spinners"
                          onChange={value => this.handleChange(value)}
                          pattern="[-+]?[0-9]?[0-9]+" //regex to get only numbers
                          maxLength="7"
                          title="Add max 7 numbers from 0 to 9."
                          placeholder="Convert..."
                        />
                      </form>
                    </div>
                    <a 
                      title="Go to Github to see the source code." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={this.handleSubmit} 
                      className="enter-link"
                    >
                      <div className="enter-wrap"></div>
                    </a>
                  </div>
                  {loading && <Spinner />}
                  <div className="quote-wrap">
                    <blockquote>
                      This is T9 convertor! Write some numbers, yo?!
                    </blockquote>
                    <blockquote>{(data && data.convertedNumbers[0]) ? this.getMatchesFromConvertedNumbers(data.convertedNumbers) : "I will show you matches here."}</blockquote>                                       
                  </div>
                </div>
                <a title="Go to Github to see the source code." href="https://github.com/lspdv/t9tecka" target="_blank" rel="noopener noreferrer">
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