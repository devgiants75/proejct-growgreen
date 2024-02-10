import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Button, Typography } from '@mui/material';
// eslint-disable-next-line import/no-named-as-default
import useStore from '../../stores/user.store';
import * as S from './Header.Style';
import Nav from '../Nav/Nav';
import logo from '../../assets/logo.svg';

function Header() {
  const navigator = useNavigate();
  const [cookies, , removeCookie] = useCookies(['userToken', 'userType']);
  const { user, removeUser } = useStore();

  const signOutHandler = () => {
    navigator('/');
    if (user) {
      removeUser(user.id);
      removeCookie('userToken', { path: '/' }); // userToken Cookie
      removeCookie('userType', { path: '/' }); // userType Cookie 삭제
    }
    console.log('로그아웃됨');
  };

  return (
    <S.Header>
      <S.Inner>
        <S.Logo>
          <Link to="/">
            <img src={logo} alt="홈페이지로 이동" />
          </Link>
        </S.Logo>
        <Nav />
        {cookies.userToken && user ? (
          <>
            {`${user.name}님, 안녕하세요`}
            <S.ButtonWrapper onClick={signOutHandler}>로그아웃</S.ButtonWrapper>
          </>
        ) : (
          <S.ButtonWrapper>
            <Link to="/login">로그인</Link>
            <Link to="/join">회원가입</Link>
          </S.ButtonWrapper>
        )}
      </S.Inner>
    </S.Header>
  );
}

export default Header;
