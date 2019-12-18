import * as React from "react";
import { UrlContext } from "@stores/url.context";

export const useUrl = (): UrlContext => {
  const [url, setUrl] = React.useState('home');

  const setCurrentUrl = React.useCallback((currentUrl: string): void => {
    setUrl(currentUrl)
  }, []);

  return {
    url,
    setCurrentUrl
  }
};