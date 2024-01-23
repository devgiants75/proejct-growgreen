import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  & > * {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0 48px;
  }
`;

export const Logo = styled.h1`
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  justify-content: flex-start;
`;

export const ButtonWrapper = styled.div`
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  justify-content: flex-end;

  & a {
    cursor: pointer;
    height: 33px;
    line-height: 33px;
    background-color: #0c243b;
    color: #fff;
    border-radius: 8px;
    border: 0;
    padding: 0 12px;
    font-weight: 600;
    font-size: 13px;
  }
`;
