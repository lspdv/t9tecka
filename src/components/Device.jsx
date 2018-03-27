import React, { Component } from 'react';

import { getCombinations, abortFetching } from '../api/t9-api';
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
      abortedRequest: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getMatchesFromConvertedNumbers = this.getMatchesFromConvertedNumbers.bind(this);
    this.handleCanceledRequest = this.handleCanceledRequest.bind(this);          
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

  handleCanceledRequest(event) {
    event.preventDefault();
    this.setState({ loading: true });
    try {
      abortFetching()
      this.setState({ loading: false }); 
    } catch (error) {
        console.log('Error in aborting your request.', error)
    }
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
                  {loading && <Spinner handleCanceledRequest={this.handleCanceledRequest}/>}
                  <div className="quote-wrap">
                    <blockquote>
                      Write some numbers, yo?
                    </blockquote>
                    <blockquote>{(data && data[0]) ? this.getMatchesFromConvertedNumbers(data) : "I will show you their matches here."}</blockquote>                                       
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