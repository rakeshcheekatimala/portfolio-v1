import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from './pages';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import * as serviceWorker from './serviceWorker';
import customTheme from './theme';

function TurnOnColorMode({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <TurnOnColorMode>
      <CSSReset />
      <PageContainer />
    </TurnOnColorMode>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
