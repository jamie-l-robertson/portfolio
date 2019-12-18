const config = {
  navLinks: [
    {
      url: "#home",
      text: "Home",
    },
    {
      url: "#about",
      text: "About",
    },
    {
      url: "#projects",
      text: "Projects",
    },
  ],
  socialLinks: [
    {
      url: "https://twitter.com/jami3Robertson",
      icon: "Twitter",
      message: "View my Twitter profile",
    },
    {
      url: "https://github.com/jamie-l-robertson",
      icon: "Github",
      message: "View my Github profile",
    },
    {
      url: "https://www.linkedin.com/in/jamie-robertson-8b75905b/",
      icon: "Linkedin",
      message: "View my Linkedin profile",
    },
    {
      url: "https://codepen.io/ru7hl355",
      icon: "Codepen",
      message: "View my Codepen",
    },
    {
      url: "mailto:jrobertson_uk@msn.com",
      icon: "Mail",
      message: "Get in touch",
    },
  ],
  contact: {
    email: "jrobertson_uk@msn.com",
    intro: "<p>Although I'm not currently looking for any new freelance opportunities, my email is always open. If you would like to discuss a potential project or just say hello!</p>"
  },
  springs: {
    logo: {
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { tension: 1000, duration: 200 },
    },
    iconsHorizontal: {
      from: { opacity: 0, y: 20 },
      to: { opacity: 1, y: 0 },
      config: { tension: 800, duration: 180 },
    },
    navHorizontal: {
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { tension: 600, duration: 400 },
    }
  },
};

export default config;
