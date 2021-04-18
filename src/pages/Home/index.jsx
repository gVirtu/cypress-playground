import React from 'react';
import { css, jsx } from '@emotion/react';
import useTheme from '@Hooks/useTheme';
import ThemeToggle from '@Components/ThemeToggle';

const Home = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: ${theme.spacing[2]};
        color: ${theme.textColor};
        background-color: ${theme.backgroundColor};
        font-size: 24px;
        border-radius: 4px;
      `}
    >
      <h1>Home</h1>
      <p>Hello world!</p>
      <ThemeToggle />
    </div>
  );
};

export default Home;
