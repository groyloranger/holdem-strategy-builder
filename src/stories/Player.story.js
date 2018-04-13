// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Player from '../components/Player';

storiesOf('Player', module)
  .add('default', () => (
    <Player stack={100} bet={0} />
  ))
  .add('with name', () => (
    <Player stack={100} bet={0} name="Button" />
  ))
  .add('folded', () => (
    <Player stack={100} bet={0} name="Button" folded />
  ))
  .add('active', () => (
    <Player stack={100} bet={0} name="Button" active />
  ))
  .add('folded overrides active', () => (
    <Player stack={100} bet={0} name="Button" folded active />
  ));
