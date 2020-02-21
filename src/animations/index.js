const easing = [0.6, -0.5, 0.01, 0.99];

const inUp = {
  initial: reducedMotion => ({
    opacity: 0,
    y: !reducedMotion ? 30 : 0,
    transition: {
      ease: easing,
    }
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    }
  }
};

const inUpDelayed = {
  initial: reducedMotion => ({
    opacity: 0,
    y: !reducedMotion ? 30 : 0,
    transition: {
      ease: easing,
    }
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      ease: easing,
    }
  }
};

const inDown = {
  initial: reducedMotion => ({
    opacity: 0,
    y: !reducedMotion ? -20 : 0,
    transition: {
      ease: easing,
    }
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.2,
    }
  }
};

const inHorizontal = {
  initial: reducedMotion => ({
    opacity: 0,
    x: !reducedMotion ? -20 : 0,
    transition: easing
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easing,
    }
  }
};

const fade = {
  initial: {
    opacity: 0,

  },
  animate: {
    opacity: 1,
    transition: {
      ease: easing,
      delay: 0.3,
    }
  }
};

const delayedFade = {
  initial: {
    opacity: 0,

  },
  animate: {
    opacity: 1,
    transition: {
      ease: easing,
      delay: 0.8,
    }
  }
};

const chained = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      ease: easing,
    }
  }
};


export { inUp, inDown, inUpDelayed, fade, delayedFade, inHorizontal, chained };  