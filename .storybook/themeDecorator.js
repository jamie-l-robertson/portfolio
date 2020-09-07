import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../src/theme/global';
import theme from '../src/theme';

const ThemeDecorator = storyFn => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </>
  )
}

export default ThemeDecorator;