import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Hero from './index';

const props = {
  showBrand: false,
  id: 'hero-1',
  data: [
    {
      prefix: '',
      title: 'Hero title goes here',
      intro: 'Intro goes here...',
      copyNode: {
        childMarkdownRemark: {
          html: '<p>Copy goes here...</p>'
        }
      },
      link: {
        url: '#',
        label: 'Click me'
      }
    }
  ]
};

const story = storiesOf('Components|Hero', module)
  .addDecorator(withA11y);

story.add('default', () => <Hero {...props} />);
