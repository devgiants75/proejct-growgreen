import { Link, Outlet } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Profile from './profile';
import Activity from './Activity';

const myPage: React.FC = () => {
  return (
    <>
      {/* 프로필 */}
      <Link to="/profile">Profile</Link>
      {/* 활동내역 */}
      <Link to="/activity">Activity</Link>

      <Outlet />
    </>
  );
};
export default myPage;

export function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        {/* !프로필 수정 */}
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>{/* 아이콘 */}</ListItemIcon>
          <ListItemText primary="프로필 수정" />
        </ListItemButton>
        !{/* !개인정보 수정 */}
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>{/* 아이콘 */}</ListItemIcon>
          <ListItemText primary="개인정보 수정" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemText primary="작성된 댓글" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <ListItemText primary="작성된 게시글" />
        </ListItemButton>
      </List>
    </Box>
  );
}
