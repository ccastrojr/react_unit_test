import React from 'react';

import * as Atoms from '../../Atoms';
import convertToBRL from '../../../utils/convertToBRL';
import Product from '../../../models/Product';

import { Container, ProductDescription } from './styles';

import { useCart } from '../../../hooks/Cart';
import { useToast } from '../../../hooks/toast';

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  return (
    <Container>
      <img src={product.image} alt={product.name} />

      <ProductDescription>
        <h4>{product.name}</h4>
        <p>por {convertToBRL(product.price)}</p>
        <span>ou em 4x de {convertToBRL(Number(product.price) / 4)}</span>

        <Atoms.Button
          type="button"
          size="default"
          onClick={() => {
            addToCart(product);
            addToast({
              type: 'success',
              title: 'Sucesso!',
              description: 'Esse item foi adicionado ao seu carrinho.',
            });
          }}
        >
          Comprar
        </Atoms.Button>
      </ProductDescription>
    </Container>
  );
};

export default ProductItem;
