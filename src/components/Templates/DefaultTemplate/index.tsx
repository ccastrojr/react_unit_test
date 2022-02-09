import React from 'react';

import * as Organism from '../../Organism';
import { Container, Content } from './styles';

const DefaultTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <Organism.Header />

      <Content>{children}</Content>

      <Organism.Footer />
    </Container>
  );
};

export default DefaultTemplate;
