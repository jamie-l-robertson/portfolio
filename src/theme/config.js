// https://coolors.co/c1c1c1-2c4251-d16666-b6c649-ffffff

const config = {
  color: {
    primary: "#C1C1C1",
    secondary: "#2C4251",
    tertiary: "#D16666",
    quaternary: "#B6C649",
    quinary: "#FFFFFF",
    text: "#FFFFFF",
    footer: "#273646",
    link: {
      default: "#FFFFFF",
      hover: "#B6C649",
    },
  },
  layout: {
    inner: {
      maxWidth: "1160px",
      padding: {
        sml: "30px",
        md: "60px",
        lrg: "140px",
      },
    },
  },
  font: {
    label: "Solway, serif",
    body: "Roboto, sans-serif",
    prefix: {
      sml: "20px",
    },
    heading: {
      sml: "34px",
    },
  },
  transitions: {
    slide: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  }
}

export default config
