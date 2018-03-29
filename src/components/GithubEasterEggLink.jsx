// @flow

import * as React from 'react';

const githubLink = 'https://github.com/lspdv/t9tecka';

type Props = {|
  handleSubmit: () => void
|};

export const GithubEasterEggLink = ({ handleSubmit }: Props) => (
  <a
    title="Go to Github to see the source code."
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="home-button home-button-easter-egg" />
  </a>
);
