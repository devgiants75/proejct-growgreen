import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.Style';
import Nav from '../Nav/Nav';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <S.Header>
      <S.Inner>
        <S.Logo>
          <Link to="/">
            <img src={logo} alt="홈페이지로 이동" />
          </Link>
        </S.Logo>
        <Nav />
        <S.ButtonWrapper>
          <Link to="/login">로그인</Link>
        </S.ButtonWrapper>
      </S.Inner>
    </S.Header>
  );
}

export default Header;
