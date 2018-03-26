import React, { Component } from 'react';
import './appStyles.scss';
import { Form } from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">T9tečka</h2>
          {/* <p className="App-title">everybody knows it, everybody want forget it!</p>           */}
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
