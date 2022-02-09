import styled from 'styled-components';
import Theme from '../../../styles/Theme';

interface MobileNavProps {
  visible: boolean;
}

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;
  padding: 0 15%;

  background-color: ${Theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    width: auto;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 25px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    display: none;
  }
`;

export const MobileNavContainer = styled.div<MobileNavProps>`
  position: absolute;
  top: 54px;
  left: -82px;

  display: none;

  width: 100vw;
  padding: 20px;

  background-color: ${Theme.colors.white};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.25);

  a + a {
    position: relative;
    margin-top: 25px;

    &::after {
      content: '';
      position: absolute;
      top: -14px;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: ${Theme.colors.secondaryWhite};
    }
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    display: ${props => (props.visible ? 'block' : 'none')};
  }
`;

export const HamburguerContainer = styled.div`
  display: none;
  position: absolute;
  left: -52px;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    display: block;
  }
`;
