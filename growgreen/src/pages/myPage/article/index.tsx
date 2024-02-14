import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import MyPageTabs from '../myPageTab/MyPageTab';

//! 작성된 게시물 페이지
function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return <Grid container>Article</Grid>;
}

export default Index;
