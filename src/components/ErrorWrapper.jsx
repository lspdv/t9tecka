import React, { Component } from 'react';

export class ErrorWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in child components
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>
            Oooops. I didn't expect that. Did you? Error happened - somehow,
            somewhere over the rainbow. Might be internet connection issue or
            more serious stuff!{' '}
          </h2>
          <h2>
            You can raise issue {''}
            <a
              href="https://github.com/lspdv/t9tecka/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              on Github
            </a>{' '}
            and I will fix it.
          </h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
