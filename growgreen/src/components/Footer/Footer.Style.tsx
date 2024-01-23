import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid #d7dce5;
`;

export const Inner = styled.div`
  max-width: 1440rem;
  display: flex;
  margin: 0 auto;
  padding: 0 16rem;
  gap: 72rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 40rem 48rem 80rem;
  }
`;

export const Logo = styled.h1``;

export const Menu = styled.div`
  display: flex;
  gap: 24rem;

  & a {
    display: inline-block;
    color: #5c667b;
    font-size: 14rem;
    position: relative;
  }

  & a:not(:first-child):after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 10rem;
    background: #ddd;
    top: 50%;
    left: -12rem;
    transform: translateY(-50%);
  }
`;

export const CopyRight = styled.p`
  margin-top: 8rem;
  font-size: 14rem;
  color: #5c667b;
`;
