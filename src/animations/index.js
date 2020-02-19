const inUp = {
  hidden: {
    opacity: 0,
    y: 30,
    duration: 0.3,
    transition: {
      ease: "easeInOut",
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    duration: 0.3,
    transition: {
      ease: "easeInOut",
    }
  }
}

const chained = {
  after: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
    },
  },
  before: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
}

export { inUp, chained };  