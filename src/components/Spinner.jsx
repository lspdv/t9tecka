import * as React from 'react';

import './Spinner.scss';

export const Spinner = () => (
    <div className="box">
      <div className="loader" />
      <span className="loading-info">
        Matching...<br />time is money...or results!
      </span>
    </div>
);
