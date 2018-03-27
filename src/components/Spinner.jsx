import * as React from 'react';

import './Spinner.scss';

export const Spinner = () => (
    <div className="box">
      <div className="loader" />
      <span className="loading-info">
        Might take a time. Long results will be scrollable. SCROLL!
      </span>
    </div>
);
