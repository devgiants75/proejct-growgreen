import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Index() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handelChange = (event: React.ChangeEvent<object>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
      <Tabs
        value={selectedTab}
        onChange={handelChange}
        aria-label="simple tabs example"
      >
        <Tab label="전체" />
        <Tab label="질문 & 고민" />
        <Tab label="자유게시판" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        전체 내용이 표시됩니다.
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        질문 & 고민 내용이 표시됩니다.
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        자유게시판 내용이 표시됩니다.
      </TabPanel>
    </Container>
  );
}

export default Index;
