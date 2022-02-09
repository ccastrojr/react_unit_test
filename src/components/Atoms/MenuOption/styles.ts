import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

import Theme from '../../../styles/Theme';

export const Container = styled(Link)`
  text-decoration: none;
  color: ${Theme.colors.higherGray};
  transition: all 0.35s ease-in-out;

  &:hover {
    color: ${darken(0.5, Theme.colors.higherGray)};
  }
`;
