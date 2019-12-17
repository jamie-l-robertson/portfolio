import * as React from "react";

export interface UrlContext {
  url: string
  setCurrentUrl: (currentUrl: string) => void
};

export const URL_DEFAULT_VALUE = {
  url: 'home',
  setCurrentUrl: () => { }
};

export const urlContext = React.createContext<UrlContext>(URL_DEFAULT_VALUE);