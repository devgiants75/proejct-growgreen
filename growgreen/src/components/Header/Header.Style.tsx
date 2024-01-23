import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440rem;
  margin: 0 auto;
  padding: 0 16rem;
  & > * {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0 48rem;
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
    height: 33rem;
    line-height: 33rem;
    background-color: #0c243b;
    color: #fff;
    border-radius: 8rem;
    border: 0;
    padding: 0 12rem;
    font-weight: 600;
    font-size: 13rem;
  }
`;
