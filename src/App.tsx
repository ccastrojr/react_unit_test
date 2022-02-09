import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './hooks/Cart';
import { ToastProvider } from './hooks/toast';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <CartProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ToastProvider>
    </CartProvider>
  );
};

export default App;
