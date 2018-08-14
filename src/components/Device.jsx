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
      inputValue: '',
      status: true
    };
  }

  handleSubmit = (event) => {
    const { inputValue, status } = this.state;
    event.preventDefault();
    this.setState({ loading: true });

    getCombinations(inputValue)
      .then(result => {
        this.setState({ data: result.data, loading: false, status: result.status });

        if (status === false) {
          throw new Error('Endpoint unavailable.');
        }
      })
      .catch(error => {
        throw new Error('Error during fetching results.');
      });
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  getMatchesFromConvertedNumbers = (data) => {
    try {
      const item = data[0].map((item, idx) => (
        <span key={idx} style={{ padding: '0 5px' }}>
          {item}
        </span>
      ));
      return item;
    } catch (error) {
      throw new Error('Error in getting pairs of letters.');

    }
  }

  render() {
    const { data, loading } = this.state;
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
                <ScreenContent
                  loading={loading}
                  data={data}
                  getMatchesFromConvertedNumbers={
                    this.getMatchesFromConvertedNumbers
                  }
                />
              </div>
              <GithubEasterEggLink />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
