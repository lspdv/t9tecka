// @flow

import * as React from 'react';

type Props = {|
  handleSubmit: () => void,
  handleChange: (value: string) => void
|};

export const DeviceInput = ({ handleSubmit, handleChange }: Props) => (
  <div className="input-container">
    <div className="bar-wrap">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input no-spinners"
          onChange={value => handleChange(value)}
          pattern="[-+]?[0-9]?[0-9]+" //regex to get only numbers in input combined with maxLengh attribute
          maxLength="7"
          title="Add max 7 numbers from 0 to 9."
          placeholder="Convert..."
          required
        />
      </form>
    </div>
    <a
      title="Go to Github to see the source code."
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleSubmit}
      className="enter-link"
    >
      <div className="enter-wrap" />
    </a>
  </div>
);
