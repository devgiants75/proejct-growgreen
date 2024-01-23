import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Nav.Style';

function Nav() {
  return (
    <S.Nav>
      <Link to="/exercise">운동</Link>
      <Link to="/">식단</Link>
      <Link to="/">커뮤니티</Link>
      <Link to="/">도전과제</Link>
    </S.Nav>
  );
}

export default Nav;
