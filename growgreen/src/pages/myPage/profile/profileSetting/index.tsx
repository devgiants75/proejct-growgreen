import { Box, List } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Tabs from '../../myPageSubTab';
import { myPageLinks } from '../../myPageHome';

// 프로필 설정
export default function Index() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Outlet />
      <List component="nav" aria-label="profile tab" sx={{ ml: 3 }}>
        <h2>프로필 설정</h2>
      </List>
      <Tabs menu={myPageLinks} index={0} />
    </Box>
  );
}
