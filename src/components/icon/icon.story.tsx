import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Icon from './index';

const story = storiesOf('Components|Icon', module)
  .addDecorator(withA11y);

story.add('default', () => <Icon name="Twitter" />);
