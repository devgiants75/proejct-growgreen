import React from 'react';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Tab from '../../../components/Tab/Tab';
// eslint-disable-next-line import/no-cycle
import Exercise from '../index';
import Stretch from '../stretch';

// 홈트레이닝 페이지
export default function Index() {
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
    },
    {
      id: 2,
      name: '스트레칭',
      path: '/exercise/stretch',
    },
  ];

  return (
    <>
      <SubTitle>홈트레이닝</SubTitle>
      <Tab links={links} index={1} />
    </>
  );
}
