import React from 'react';

import banner from '../../assets/banner.jpg';

import * as Organism from '../../components/Organism';

import { Container, Banner, Content } from './styles';

const Products: React.FC = () => {
  return (
    <Container>
      <Banner src={banner} alt="Dashboard banner" />

      <Content data-testid="product_list_wrapper">
        <Organism.ProductsList />
      </Content>
    </Container>
  );
};

export default Products;
