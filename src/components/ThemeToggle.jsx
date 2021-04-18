import React, { useContext } from 'react';
import ThemeContext from '@Contexts/ThemeContext';

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const onClick = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <button type="button" onClick={onClick}>
      <span title="Switch theme">
        {themeMode === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;
