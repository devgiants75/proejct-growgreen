/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ArticleIcon from '@mui/icons-material/Article';

//! 마이페이지 탭 설정

interface MyPageTabsProps {
  selectedIndex: number;
  handleListItemClick: (index: number) => void;
}

const MyPageTabs: React.FC<MyPageTabsProps> = ({
  selectedIndex,
  handleListItemClick,
}) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="profile tab" sx={{ ml: 3 }}>
        프로필
        {/* !프로필 수정 */}
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
        >
          <Link to="/profileSetting">
            <AccountBoxIcon sx={{ fontSize: '16px', ml: 2, mr: 1 }} />
            프로필 수정
          </Link>
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="activity tab" sx={{ ml: 3 }}>
        활동내역
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
        >
          <Link to="/commentsWritten">
            <SpeakerNotesIcon sx={{ fontSize: '16px', ml: 2, mr: 1 }} />
            작성된 댓글
          </Link>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={() => handleListItemClick(3)}
        >
          <Link to="/postWritten">
            <ArticleIcon sx={{ fontSize: '16px', ml: 2, mr: 1 }} />
            작성된 게시글
          </Link>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default MyPageTabs;
