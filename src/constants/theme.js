const BASE = {
  spacing: [
    8,
    16,
    32,
    64,
  ],
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
