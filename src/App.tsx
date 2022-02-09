import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CardProvider } from './hooks/Cart';
import { ToastProvider } from './hooks/toast';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <CardProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ToastProvider>
    </CardProvider>
  );
};

export default App;
