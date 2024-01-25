import React from 'react';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Tab from '../../../components/Tab/Tab';
// 스트레칭 페이지
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
      <SubTitle>스트레칭</SubTitle>
      <Tab links={links} index={2} />
    </>
  );
}
