import React from 'react';
import { Outlet } from 'react-router-dom';
import SubTitle from '../../components/SubTitle/SubTitle';
import Tab from '../../components/Tab/Tab';

export const communityLink = [
  {
    id: 0,
    name: '전체',
    path: '/community',
  },
  {
    id: 1,
    name: '질문 & 고민',
    path: '/community/inquity',
  },
  {
    id: 2,
    name: '자유게시판',
    path: '/community/board',
  },
];

function Index() {
  return (
    <>
      <SubTitle>커뮤니티</SubTitle>
      <Tab links={communityLink} index={0} />
      <Outlet />
    </>
  );
}

export default Index;
