import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '@Contexts/ThemeContext';

const ThemeProvider = ({ theme, children }) => {
  const themeState = useState(theme);

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

ThemeProvider.defaultProps = {
  theme: 'light',
};

export default ThemeProvider;
