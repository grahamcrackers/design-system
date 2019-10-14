import React from 'react';
import { withA11y } from "@storybook/addon-a11y";
import { addDecorator, configure } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
