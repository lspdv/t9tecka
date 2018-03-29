import React, { Component } from 'react';
import './appStyles.scss';
import { Device } from './components/Device';
import { ErrorWrapper } from './components/ErrorWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">T9tečka</h2>
        </header>
        <ErrorWrapper>
          <Device />
        </ErrorWrapper>
      </div>
    );
  }
}

export default App;
