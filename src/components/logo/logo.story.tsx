import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Logo from './index';

const story = storiesOf('Components|Logo', module)
  .addDecorator(withA11y);

story.add('default', () => <div style={{ width: '30px', color: '#B6C649' }}><Logo /></div>);
