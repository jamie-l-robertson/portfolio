// https://coolors.co/c1c1c1-2c4251-d16666-b6c649-ffffff

const theme = {
  color: {
    primary: "#C1C1C1",
    secondary: "#2C4251",
    tertiary: "#D16666",
    quaternary: "#B6C649",
    quinary: "#FFFFFF",
    text: "#FFFFFF",
    link: {
      default: "#FFFFFF",
      hover: "#B6C649",
    },
  },
  layout: {
    inner: {
      maxWidth: "1024px",
      padding: {
        sml: "30px",
        md: "50px",
        lrg: "70px",
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
  breakpoints: {
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1360,
  },
}

export default theme
