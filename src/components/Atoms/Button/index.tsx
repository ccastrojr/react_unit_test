import React from 'react';

import { Container } from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: 'default' | 'large';
};

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest} data-testid="pure_button">
      {children}
    </Container>
  );
};

export default Button;
