//@flow

import * as React from 'react';

import { Spinner } from './Spinner';
import { WordsList } from './WordsList'

type DataShape = {| convertedNumbers: Array<Array<string>>, matchingWords: Array<string> |}

type Props = {|
  loading: boolean,
  data: DataShape,
  getMatchesFromConvertedNumbers: (data: Array<Array<string>>) => void,
|};

export const ScreenContent = ({ loading, data, getMatchesFromConvertedNumbers }: Props) => (
  <div>
    {loading && <Spinner />}
    <div className="quote-wrap">
      <blockquote>This is T9 convertor! Write some numbers, yo?!</blockquote>
      {data && data.matchingWords && <WordsList data={data.matchingWords}/>}
      <blockquote>
        {data && data.convertedNumbers
          ? getMatchesFromConvertedNumbers(data.convertedNumbers)
          : 'I will show you matches here.'}
      </blockquote>
    </div>
  </div>
);
