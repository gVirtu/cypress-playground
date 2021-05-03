const BASE = {
  spacing: [
    8,
    16,
    32,
    64,
  ],
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
  },
};

export default {
  light: {
    ...BASE,
    textColor: '#000',
    backgroundColor: '#fff',
  },
  dark: {
    ...BASE,
    textColor: '#fff',
    backgroundColor: '#333',
  },
};
