//@flow

import * as React from 'react';

import './Spinner.scss'; //TODO V2 github:@reklosenetagovat manage to auto create types for scss files

export const Spinner = () => (
    <div className="box">
      <div className="loader" />
      <span className="loading-info">
        Matching...<br />time is money...or results!
      </span>
    </div>
);
