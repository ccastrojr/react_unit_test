import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Products from '../pages/Products';
import Cart from '../pages/Cart';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
