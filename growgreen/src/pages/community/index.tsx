import React, { useState } from 'react';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '80%',
  margin: '0 auto',
});

const StyledTabPanel = styled('div')({
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
  boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
  width: '100%',
  padding: '20px',
});

const StyledTabs = styled(Tabs)({
  marginBottom: '20px',
});

const StyledTypography = styled(Typography)({
  fontSize: '1.2rem',
});

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <StyledTabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <StyledTypography>{children}</StyledTypography>
        </Box>
      )}
    </StyledTabPanel>
  );
}

function Index() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.ChangeEvent<object>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <StyledContainer>
      <StyledTabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="전체" />
        <Tab label="질문 & 고민" />
        <Tab label="자유게시판" />
      </StyledTabs>
      <TabPanel value={selectedTab} index={0}>
        전체 내용이 표시됩니다.
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        질문 & 고민 내용이 표시됩니다.
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        자유게시판 내용이 표시됩니다.
      </TabPanel>
    </StyledContainer>
  );
}

export default Index;
