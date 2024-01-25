import { Link, NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import SubTitle from '../../components/SubTitle/SubTitle';
// eslint-disable-next-line import/no-cycle
import HomeTraining from './homeTraining';
import Stretch from './stretch';
import Tab from '../../components/Tab/Tab';

function Index() {
  const links = [
    {
      id: 0,
      name: '전체',
      path: '/exercise',
    },
    {
      id: 1,
      name: '홈트레이닝',
      path: '/exercise/home-training',
      content: <HomeTraining />,
    },
    {
      id: 2,
      name: '스트레칭',
      path: '/exercise/stretch',
      content: <Stretch />,
    },
  ];

  return (
    <>
      <SubTitle>운동</SubTitle>
      <Tab links={links} index={0} />
      <Outlet />
    </>
  );
}

export default Index;
