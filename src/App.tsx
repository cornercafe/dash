import { createTheme, NextUIProvider, Theme } from '@nextui-org/react';

import Dashboard from './Dashboard';
import { Sidebar } from './layout/Sidebar';
import RightBar from './RightBar';

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

function App() {
  return (
    <NextUIProvider theme={lightTheme}>
      <div className="flex h-screen">
        <Sidebar />

        <div className="bg-white grow">
          <Dashboard />
        </div>

        <div className="w-96 ">
          <RightBar />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
