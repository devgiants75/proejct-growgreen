import React from 'react';
import { Outlet } from 'react-router-dom';
import SubTitle from '../../components/SubTitle/SubTitle';
import Tab from '../../components/Tab/Tab';
import { Box, Button, TextField } from '@mui/material';

export const communityLink = [
  {
    id: 0,
    name: '전체',
    path: '/community',
  },
  {
    id: 1,
    name: '질문 & 고민',
    path: '/community/inquiry',
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: 2
        }}
      >
        {/* 체크 박스 및 텍스트 */}
        <Box>
          {/* 전체 게시글 수 */}
          <Box>전체 게시글 수</Box>
          {/* 체크 박스 */}
          <Box>체크 박스</Box>
        </Box>
        {/* 검색 바 & 버튼 */}
        <Box>
          <Box
            sx={{
              fontSize: '16rem'
            }}
          >
            <TextField
              id='search-input'
              variant='outlined'
              size='small'
              placeholder='커뮤니티 내에서 검색'
            />
          </Box>
          <Button>검색하기</Button>
        </Box>
      </Box>
    </>
  );
}

export default Index;
