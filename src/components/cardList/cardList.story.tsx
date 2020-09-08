import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import CardList from './index';

const props = {
  heading: 'List of cards',
  cards: [
    {
      node: {
        title: 'Card title 1',
        repository: '#',
        projectUrl: '#',
        intro: 'Card 1 intro goes here...',
        projectTech: ['React', 'GraphQL']
      }
    },
    {
      node: {
        title: 'Card title 2',
        repository: '#',
        projectUrl: '#',
        intro: 'Card 2 intro goes here...',
        projectTech: ['Gatsby']
      }
    }
  ],
  id: 'card-list-1'
};

const story = storiesOf('Components|Card list', module)
  .addDecorator(withA11y)
  .addDecorator(withInfo);

story.add('default', () => <CardList {...props} />);
