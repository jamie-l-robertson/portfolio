import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Footer from './index';

const props = {};

const story = storiesOf('Components|Footer', module)
  .addDecorator(withA11y);

story.add('default', () => <Footer {...props} />);
