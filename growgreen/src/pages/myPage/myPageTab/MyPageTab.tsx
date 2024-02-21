/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ArticleIcon from '@mui/icons-material/Article';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 300rem;
  margin-left: 50rem;
  margin-top: 70rem;
`;

const TabContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 16px;
  width: 200rem;
  margin: 3rem auto;
`;

const IconWrapper = styled.span`
  margin-right: 8px;
`;

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
    <Container>
      <TabContainer>
        {/* 프로필 */}
        <List component="nav" aria-label="profile tab">
          {/* 프로필 수정 */}
          <ListItemButton disabled> 프로필 </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={() => handleListItemClick(0)}
          >
            <StyledLink to="/profileSetting">
              <IconWrapper>
                <AccountBoxIcon sx={{ fontSize: '16px' }} />
              </IconWrapper>
              프로필 수정
            </StyledLink>
          </ListItemButton>
          <ListItemButton disabled>활동내역</ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={() => handleListItemClick(2)}
          >
            <StyledLink to="/commentsWritten">
              <IconWrapper>
                <SpeakerNotesIcon sx={{ fontSize: '16px' }} />
              </IconWrapper>
              작성한 댓글
            </StyledLink>
          </ListItemButton>
          {/* 작성한 게시글 */}
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={() => handleListItemClick(3)}
          >
            <StyledLink to="/postWritten">
              <IconWrapper>
                <ArticleIcon sx={{ fontSize: '16px' }} />
              </IconWrapper>
              작성한 게시글
            </StyledLink>
          </ListItemButton>
        </List>
      </TabContainer>
    </Container>
  );
};

export default MyPageTabs;
