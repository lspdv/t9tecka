import React, { Component } from 'react';
import './appStyles.scss';
import { Form } from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">T9tečka</h1>
          <p className="App-title">everyone knows it, everyone wants to forget it!</p>          
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
