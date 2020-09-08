import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import ContentPanel from './index';

const props = {
  id: 'content-panel-1',
  content: [{
    title: 'content panel title',
    contentNode: {
      childMarkdownRemark: {
        html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada augue vel hendrerit ornare. Quisque tristique in purus nec sollicitudin. Ut efficitur risus eget metus placerat mattis. Maecenas at est in leo efficitur fermentum. In scelerisque consectetur massa dignissim scelerisque. Nulla a dolor suscipit est varius pharetra nec at lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p><ul><li>Javascript</li><li>HTML &amp; CSS</li><li>React</li></ul>'
      }
    }
  }]
};

const story = storiesOf('Components|Content panel', module)
  .addDecorator(withA11y)
  .addDecorator(withInfo);

story.add('Content panel Component', () => <ContentPanel {...props} />);
