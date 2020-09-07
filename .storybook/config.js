import React from "react";
import { configure, addDecorator } from "@storybook/react";
import themeDecorator from './themeDecorator';

addDecorator(themeDecorator);