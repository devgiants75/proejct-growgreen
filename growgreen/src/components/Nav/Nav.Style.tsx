import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  height: 70px;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  gap: 10px;

  & a {
    cursor: pointer;
    border-radius: 4px;
    padding: 0 11px;
    font-size: 14px;
    color: rgb(12, 36, 59);
    text-decoration: none;
    font-weight: 600;
    height: 33px;
    line-height: 33px;
    &:hover {
      background-color: #f4f6fa;
    }
  }
`;
