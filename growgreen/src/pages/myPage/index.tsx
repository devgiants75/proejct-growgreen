import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ArticleIcon from '@mui/icons-material/Article';

export default function MyPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Outlet />
      <List component="nav" aria-label="profile tab" sx={{ ml: 3 }}>
        프로필
        {/* !프로필 수정 */}
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <Link to="/profileSetting">
            <AccountBoxIcon sx={{ fontSize: '16px', ml: 2, mr: 1 }} />
            프로필 수정
          </Link>
        </ListItemButton>
        {/* !개인정보 수정 */}
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <Link to="/editPersonalInfo">개인정보 수정</Link>
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="activity tab" sx={{ ml: 3 }}>
        활동내역
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <Link to="/commentsWritten">
            <SpeakerNotesIcon sx={{ fontSize: '16px' }} />
            작성된 댓글
          </Link>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <Link to="/postWritten">
            <ArticleIcon sx={{ fontSize: '16px' }} />
            작성된 게시글
          </Link>
        </ListItemButton>
      </List>
    </Box>
  );
}
