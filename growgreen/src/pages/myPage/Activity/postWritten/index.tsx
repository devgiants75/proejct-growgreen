import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import MyPageTabs from '../../myPageTab/MyPageTab';

//! 작성된 게시물 페이지
function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Grid container>
      <Grid item xs={3}>
        <MyPageTabs
          selectedIndex={selectedIndex}
          handleListItemClick={handleClick}
        />
      </Grid>
      <Grid item xs={9}>
        <Box p={2}>
          <Outlet />
          <div>작성된 게시물 페이지</div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Index;
