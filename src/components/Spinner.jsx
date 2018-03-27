import * as React from 'react';

import './Spinner.scss';

export const Spinner = props => {
  const { handleCanceledRequest } = props;
  return (
    <div className="box">
      <div className="loader" />
      <span>
        Finding all combinations, if you filled more than 5 digis might take
        long time. Results will be scrollable.
      </span>
      <button onClick={handleCanceledRequest}>Stop Matching</button>
    </div>
  );
};
