import React from 'react';

import * as Atoms from '../../Atoms';

import {
  Container,
  AddressContainer,
  LateralFooterContainer,
  LateralWrapper,
  ContactContainer,
  Contact,
} from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <ContactContainer>
        <Contact>
          <h3>Participe de nossas news com promoções e novidades!</h3>

          <form>
            <Atoms.Input
              format="large"
              type="text"
              name="name"
              placeholder="Digite seu nome"
            />

            <Atoms.Input
              format="large"
              type="email"
              name="email"
              placeholder="Digite seu email"
            />

            <Atoms.Button type="submit" size="large">
              Eu quero!
            </Atoms.Button>
          </form>
        </Contact>
      </ContactContainer>

      <Container>
        <AddressContainer>
          <h2>Localização</h2>

          <div>
            <p>Avenida Qualquer, 90. São Luís</p>
            <p>São Luís, MA</p>
            <a href="mailto:emailteste@email.com">emailteste@email.com</a>
            <a href="tel:+559832999999">+55 98 3299 9999</a>
          </div>
        </AddressContainer>

        <LateralFooterContainer>
          <LateralWrapper>
            <p>Created by</p>
            <a
              href="https://github.com/ccastrojr"
              target="_blank"
              rel="noreferrer"
            >
              Cláudio Castro
            </a>
          </LateralWrapper>
        </LateralFooterContainer>
      </Container>
    </>
  );
};

export default Footer;
