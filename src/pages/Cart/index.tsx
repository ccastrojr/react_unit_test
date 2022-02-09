import React from 'react';

import { ReactComponent as Close } from '../../assets/close.svg';
import convertToBRL from '../../utils/convertToBRL';

import * as Atoms from '../../components/Atoms';
import { useCart } from '../../hooks/Cart';
import { useToast } from '../../hooks/toast';

import {
  Container,
  Title,
  CartItemsList,
  CartItem,
  PageFooter,
  EmptyCard,
  FinalPriceContainer,
} from './styles';

const Cart: React.FC = () => {
  const { products, getTotalPrice, removeToCard } = useCart();
  const { addToast } = useToast();

  return (
    <Container>
      {products.length === 0 ? (
        <EmptyCard data-testid="empty_cart_container">
          <h1>Sem itens no seu carrinho :(</h1>
        </EmptyCard>
      ) : (
        <>
          <Title>Seu carrinho</Title>

          <CartItemsList>
            {products.map(item => (
              <CartItem key={item.id}>
                <div>
                  <span>{item.count}</span>

                  <img src={item.image} alt={item.name} />
                  <p>
                    {item.name}
                    <span className="price">
                      {convertToBRL(Number(item.price) * item.count)}
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    removeToCard(item.id);
                    addToast({
                      type: 'info',
                      title: 'Item removido do seu carrinho.',
                    });
                  }}
                  data-testid="remove_item_cart"
                >
                  <Close />
                </button>
              </CartItem>
            ))}
          </CartItemsList>

          <PageFooter>
            <FinalPriceContainer>
              <p>Total: {convertToBRL(getTotalPrice)}</p>
            </FinalPriceContainer>

            <Atoms.Button type="button" size="large">
              Finalizar Compra
            </Atoms.Button>
          </PageFooter>
        </>
      )}
    </Container>
  );
};

export default Cart;
