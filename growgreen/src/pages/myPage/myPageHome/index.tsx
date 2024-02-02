import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Tabs from '../myPageTab';

// 마이페이지 홈

export const myPageLinks = [
  {
    id: 0,
    title: '마이페이지전체',
    to: '/mypage',
  },
  {
    id: 1,
    title: '프로필 설정',
    to: '/mypage/profileSetting',
  },
  {
    id: 2,
    title: '개인정보 설정',
    to: '/mypage/editPersonalInfo',
  },
  {
    id: 3,
    title: '작성된 댓글',
    to: '/mypage/commentsWritten',
  },
  {
    id: 4,
    title: '작성된 게시물',
    to: '/mypage/postWritten',
  },
];

function Index() {
  return (
    <>
      <p>마이페이지</p>
      <Tabs menu={myPageLinks} index={0} />
      <Outlet />
    </>
  );
}

export default Index;
