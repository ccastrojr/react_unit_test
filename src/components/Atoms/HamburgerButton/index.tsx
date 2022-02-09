import React from 'react';

import { Container } from './styles';

interface HamburgerButtonProps {
  checked: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ checked }) => {
  return (
    <Container data-testid="hamburger_button">
      <input type="checkbox" defaultChecked={checked} />

      <span />
      <span />
      <span />
    </Container>
  );
};

export default HamburgerButton;
