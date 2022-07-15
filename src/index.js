import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import App from 'components/App';
import './index.css';
import { Theme } from './components/Theme';
import { BrowserRouter } from 'react-router-dom';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Global />
      <BrowserRouter basename="/goit-react-hw-05-movies/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

//basename="/goit-react-hw-05-movies/"
