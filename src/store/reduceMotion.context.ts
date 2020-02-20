import * as React from "react";

export interface ReducedMotionContextProps {
  reducedMotion: boolean
};

export const DEFAULT_VALUE = {
  reducedMotion: false
};

export const prefersReducedMotionContext = React.createContext<educedMotionContextProps>(DEFAULT_VALUE);