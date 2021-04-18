/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '@Components/ThemeProvider';

const ProviderWrapper = ({ children }) => (
  <ThemeProvider theme="light">
    {children}
  </ThemeProvider>
);

const customRender = (ui, options) => (
  render(ui, { wrapper: ProviderWrapper, ...options })
);

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
