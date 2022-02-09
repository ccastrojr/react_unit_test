import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import * as Molecules from '../../Molecules';
import * as Atoms from '../../Atoms';

import {
  Container,
  Content,
  NavContainer,
  MobileNavContainer,
  HamburguerContainer,
} from './styles';

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <Content>
        <HamburguerContainer
          onClick={() => setOpenMenu(!openMenu)}
          data-testid="hamburguer_btn_container"
        >
          <Atoms.HamburgerButton checked={openMenu} />
        </HamburguerContainer>

        <Link to="/">
          <Logo />
        </Link>

        <NavContainer>
          <Atoms.MenuOption label="Nossos Produtos" to="/" />
          <Molecules.Cart />
        </NavContainer>

        <MobileNavContainer visible={openMenu}>
          <Atoms.MenuOption label="Nossos Produtos" to="/" />
          <Molecules.Cart />
        </MobileNavContainer>
      </Content>
    </Container>
  );
};

export default Header;
