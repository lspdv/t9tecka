//@flow

import * as React from 'react';

import './WordsList.scss'; //TODO V2 github:@reklosenetagovat manage to auto create types for scss files

type Props = {|
  data: Array<string>
|}

export const WordsList = ({ data }: Props) => (
  <div className="words-list-container">
    <span className="words-list-button">
      Matching words:
      {data.map((item, idx) => (
        <span key={idx} style={{ padding: '0 5px' }}>
          {item}
        </span>
      ))}
    </span>
  </div>
);
