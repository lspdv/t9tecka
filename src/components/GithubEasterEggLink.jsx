// @flow

import * as React from 'react';

const githubLink = 'https://github.com/lspdv/t9tecka';

export const GithubEasterEggLink = () => (
  <a
    title="Go to Github to see the source code."
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="home-button home-button-easter-egg" />
  </a>
);
