import { Outlet } from 'react-router-dom';
import React from 'react';
import SubTitle from '../../components/SubTitle/SubTitle';
import Tab from '../../components/Tab/Tab';

export const exerciseLinks = [
  {
    id: 0,
    name: '전체',
    path: '/exercise',
  },
  {
    id: 1,
    name: '홈트레이닝',
    path: '/exercise/home-training',
  },
  {
    id: 2,
    name: '스트레칭',
    path: '/exercise/stretch',
  },
];

function Index() {
  return (
    <>
      <SubTitle>운동</SubTitle>
      <Tab links={exerciseLinks} index={0} />
      <Outlet />
      <div>exercise</div>
    </>
  );
}

export default Index;
