import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Link from './index';

const props = {
  external: false,
  href: '#',
  isActive: false,
  showButton: true,
  children: 'Click me'
}

const story = storiesOf('Components|Link', module)
  .addDecorator(withA11y);

story.add('default', () => <Link {...props} />);
