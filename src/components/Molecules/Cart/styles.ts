import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

import Theme from '../../../styles/Theme';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 5px;
    width: 20px;
    height: 20px;
    background-color: ${Theme.colors.lightRed};
    border-radius: 50%;

    transition: all 0.35s ease-in-out;

    &:hover {
      background-color: ${darken(0.1, Theme.colors.lightRed)};
    }

    span {
      font-size: 14px;
      font-weight: 500;
      color: #fff;
    }
  }
`;
