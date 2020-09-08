import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import BackToTop from './index';

const props = {
  offset: 200,
  scrollType: "smooth",
  iconName: "ArrowUpCircle"
};

const story = storiesOf('Components|backToTop', module)
  .addDecorator(withA11y)
  .addDecorator(withInfo);

story.add('default', () => <BackToTop show={true} {...props} />);
