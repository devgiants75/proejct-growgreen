import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import MyPageTabs from '../myPageTab/MyPageTab';

// 작성된 댓글 설정
function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return <div>Comment</div>;
}

export default Index;
