//@flow

import * as React from 'react';

import { Spinner } from './Spinner';
import { WordsList } from './WordsList'

type Props = {|
  loading: boolean,
  data: any, //TODO version 2 - github:@lspdv to figure out and fix to proper useful type of Arrays in Arrays, hell yeah
  getMatchesFromConvertedNumbers: (data: any) => void,
|};

export const ScreenContent = ({ loading, data, getMatchesFromConvertedNumbers, neco }: Props) => (
  <div>
    {loading && <Spinner />}
    <div className="quote-wrap">
      <blockquote>This is T9 convertor! Write some numbers, yo?!</blockquote>
      {data && data.matchingWords && <WordsList data={data.matchingWords}/>}
      <blockquote>
        {data && data.convertedNumbers[0]
          ? getMatchesFromConvertedNumbers(data.convertedNumbers)
          : 'I will show you matches here.'}
      </blockquote>
    </div>
  </div>
);
