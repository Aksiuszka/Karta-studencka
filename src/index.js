import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './context/theme/theme';
import App from './App';
import GlobalStyles from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme>
    <GlobalStyles />
    <App />
  </Theme>
);
