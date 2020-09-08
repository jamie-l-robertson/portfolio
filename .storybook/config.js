import React from "react";
import { addDecorator } from "@storybook/react";
import themeDecorator from './themeDecorator';

//Fixes __PATH_PREFIX__ error when component uses gatsby link
global.__BASE_PATH__ = '';

addDecorator(themeDecorator);