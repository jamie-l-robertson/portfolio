import React, { useEffect, useState } from 'react';

export const useReduceMotion = () => {
  // Check we aren't server side.
  if (typeof window === 'undefined') return false;

  const [matches, setMatch] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = () => {
      setMatch(mq.matches);
    };

    handleChange();
    mq.addListener(handleChange);

    return () => {
      mq.removeListener(handleChange);
    }
  }, []);

  return matches;
}