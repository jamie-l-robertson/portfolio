const easing = [0.6, -0.5, 0.01, 0.99];

const inUp = {
  initial: {
    opacity: 0,
    y: 30,
    transition: {
      ease: easing,
    }
  },
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
  initial: {
    opacity: 0,
    y: 30,
    transition: {
      ease: easing,
    }
  },
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
  initial: {
    opacity: 0,
    y: -20,
    transition: {
      ease: easing,
    }
  },
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
  initial: {
    opacity: 0,
    x: -20,
    transition: easing
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easing,
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


export { inUp, inDown, inUpDelayed, delayedFade, inHorizontal, chained };  