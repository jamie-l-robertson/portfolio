import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import Heading from './index';

const story = storiesOf('Components|Heading', module)
  .addDecorator(withA11y)
  .addDecorator(withInfo);

story.add('All headings', () => {
  return (
    <>
      <Heading level="1">Heading level 1</Heading>
      <Heading level="2">Heading level 2</Heading>
      <Heading level="3">Heading level 3</Heading>
      <Heading level="4">Heading level 4</Heading>
      <Heading level="5">Heading level 5</Heading>
      <Heading level="6">Heading level 6</Heading>
    </>
  )
});
