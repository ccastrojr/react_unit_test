import React from 'react';
import { LinkProps } from 'react-router-dom';

import { Container } from './styles';

interface Props extends LinkProps {
  label: string;
}

const MenuOption: React.FC<Props> = ({ label, ...rest }) => {
  return <Container {...rest}>{label}</Container>;
};

export default MenuOption;
