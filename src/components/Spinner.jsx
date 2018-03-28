import * as React from 'react';

import './Spinner.scss';

export const Spinner = () => (
    <div className="box">
      <div className="loader" />
      <span className="loading-info">
        Matching...
      </span>
    </div>
);
