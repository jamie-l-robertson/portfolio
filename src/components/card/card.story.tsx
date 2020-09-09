import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import Card from './index';

const props = {
  node: {
    title: 'Card title',
    repository: '#',
    projectUrl: '#',
    intro: 'Card intro goes here...',
    projectTech: ['React', 'GraphQL']
  }
};

const story = storiesOf('Components|Card', module)
  .addDecorator(withA11y)
  .addDecorator(withInfo);

story.add('default', () => <Card {...props} />);
