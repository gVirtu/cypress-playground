import { useContext } from 'react';
import APP_THEME from '@Constants/theme';
import ThemeContext from '@Contexts/ThemeContext';

export default () => {
  const [currentTheme, _setCurrentTheme] = useContext(ThemeContext);

  return APP_THEME[currentTheme];
};
