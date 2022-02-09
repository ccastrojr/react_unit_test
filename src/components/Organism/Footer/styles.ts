import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;

  height: 200px;
  width: 100%;

  padding: 20px 15%;

  background-color: ${Theme.colors.black};

  @media (max-width: ${Theme.breakPoints.mobile}) {
    height: auto;
    flex-direction: column;
  }
`;

export const AddressContainer = styled.div`
  h2,
  p,
  a {
    color: ${Theme.colors.white};
  }

  h2 {
    position: relative;
    font-size: 20px;
    font-weight: 700;

    &::after {
      content: '';
      position: absolute;
      top: 35px;
      left: 0;

      width: 50px;
      height: 3px;

      background: ${Theme.colors.white};
    }
  }

  div {
    margin-top: 30px;

    p,
    a {
      display: block;

      margin-top: 5px;

      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const LateralFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div + div {
    margin-left: 35px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    margin-top: 30px;
  }
`;

export const LateralWrapper = styled.div`
  p {
    font-size: 12px;
    color: ${Theme.colors.white};
    margin-bottom: 5px;
  }

  a {
    text-decoration: none;
    color: ${Theme.colors.white};
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 70px;

  height: 120px;
  width: 100%;

  background-color: ${Theme.colors.lightWhite};

  @media (max-width: ${Theme.breakPoints.mobile}) {
    height: auto;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 22px;
    color: ${Theme.colors.lightBlack};
    font-weight: 700;

    margin-bottom: 16px;
  }

  input {
    margin-right: 10px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    padding-top: 10px;
    padding-bottom: 10px;

    h3 {
      font-size: 16px;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }

    button {
      width: 100%;
    }
  }
`;
