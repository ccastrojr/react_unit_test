import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import Product from '../../../models/Product';

import * as Molecules from '../../Molecules';

import { Container, Title, List } from './styles';

const ProductsList: React.FC = () => {
  const [products, setProduts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get('/products');

      setProduts(response.data);
    };

    getProducts();
  }, []);

  return (
    <Container>
      <Title>Nossos Produtos</Title>

      <List>
        {products.map(item => (
          <Molecules.ProductItem key={item.id} product={item} />
        ))}
      </List>
    </Container>
  );
};

export default ProductsList;
