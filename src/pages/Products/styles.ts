import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Container = styled.div``;

export const Banner = styled.img`
  width: 100%;
  height: auto;
`;

export const Content = styled.section`
  margin-top: 25px;
  padding: 0px 15%;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    padding: 0px 10%;
  }
`;
