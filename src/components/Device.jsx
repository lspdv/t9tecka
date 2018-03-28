import React, { Component } from 'react';

import { getCombinations } from '../api/t9-api';
import { DeviceInput } from './DeviceInput';
import { GithubEasterEggLink } from './GithubEasterEggLink';
import { ScreenContent } from './ScreenContent';

import './Device.scss';
import '../grid.scss';

export class Device extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: null,
      inputValue: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getMatchesFromConvertedNumbers = this.getMatchesFromConvertedNumbers.bind(
      this
    );
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
      const item = data[0].map((item, idx) => (
        <span key={idx} style={{ padding: '0 5px' }}>
          {item}
        </span>
      ));
      return item;
    } catch (error) {
      console.log('Error in getting pairs of letters.', error);
    }
  }

  render() {
    const { data, loading } = this.state;
    console.log(data);
    return (
      <div className="container">
        <div className="row">
          <div className="view-small view-grid">
            <div className="phone">
              <div className="camera"></div>
              <div className="speaker"></div>
              <div className="buttons"></div>
              <div className="screen">
                <div className="bar">
                  <DeviceInput
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                  />
                </div>
                <ScreenContent loading={loading} data={data} getMatchesFromConvertedNumbers={this.getMatchesFromConvertedNumbers}/>
                {/* {loading && <Spinner />}
                <div className="quote-wrap">
                  <blockquote>
                    This is T9 convertor! Write some numbers, yo?!
                  </blockquote>
                  <blockquote>
                    {data && data.convertedNumbers[0]
                      ? this.getMatchesFromConvertedNumbers(
                          data.convertedNumbers
                        )
                      : 'I will show you matches here.'}
                  </blockquote>
                </div> */}
              </div>
              <GithubEasterEggLink />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
