import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Particles from './index';

const story = storiesOf('Components|Particles', module)
  .addDecorator(withA11y);

story.add('default', () => <Particles />);
