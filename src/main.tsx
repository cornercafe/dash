import './index.css';

import { createTheme, NextUIProvider, Theme } from '@nextui-org/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useDarkMode } from 'usehooks-ts';

import App from './App';

const fonts = {
  sans: `"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"`,
};

const sharedTheme: Theme = {
  theme: {
    fonts,
  },
};

export const lightTheme = createTheme({
  ...sharedTheme,
  type: 'light',
});

export const darkTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
});

const MyApp = () => {
  const { isDarkMode } = useDarkMode(false);
  return (
    <NextUIProvider theme={lightTheme}>
      <App />
    </NextUIProvider>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <MyApp />
    </StrictMode>,
  );
}
