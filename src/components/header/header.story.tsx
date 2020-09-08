import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Header from './index';

const story = storiesOf('Components|Header', module)
  .addDecorator(withA11y);

story.add('default', () => <Header siteTitle='Portfolio' />);
