import React from 'react';

import { ReactComponent as CartIcon } from '../../../assets/cart.svg';
import { useCart } from '../../../hooks/Cart';

import { Container } from './styles';

const Cart: React.FC = () => {
  const { products } = useCart();

  return (
    <Container to="/cart" data-testid="cart_link_component">
      <CartIcon />
      {products.length > 0 && (
        <div>
          <span>{products.length}</span>
        </div>
      )}
    </Container>
  );
};

export default Cart;
