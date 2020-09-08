import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import ContactPanel from './index';

const props = {
  id: 'contact-panel',
  title: 'Get in touch',
  buttonText: 'Send a message'
};

const story = storiesOf('Components|Contact panel', module)
  .addDecorator(withA11y)
  .addDecorator(withInfo);

story.add('Contact panel Component', () => <ContactPanel {...props} />);
