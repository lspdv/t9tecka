//@flow

import * as React from 'react';

import { Spinner } from './Spinner';

// type convertedNumbersProps= {|
//   convertedNumbers: Array<string> |};

type Props = {|
  loading: boolean,
  data: any,
  getMatchesFromConvertedNumbers: (data: any) => void
|};

export const ScreenContent = ({ loading, data, getMatchesFromConvertedNumbers }: Props) => (
  <div className="">
    {loading && <Spinner />}
    <div className="quote-wrap">
      <blockquote>This is T9 convertor! Write some numbers, yo?!</blockquote>
      <blockquote>
        {data && data.convertedNumbers[0]
          ? getMatchesFromConvertedNumbers(data.convertedNumbers)
          : 'I will show you matches here.'}
      </blockquote>
    </div>
  </div>
);
