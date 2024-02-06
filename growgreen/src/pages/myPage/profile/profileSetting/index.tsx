import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Button, Grid, Input, TextField, Typography } from '@mui/material';
import axios from 'axios';
import MyPageTabs from '../../myPageTab/MyPageTab';
import { User } from '../../../../utils/types';
// eslint-disable-next-line import/no-named-as-default
import useStore from '../../../../stores/user.store';

// 프로필 설정
function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  const { user, updateUser } = useStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChanged, setIsChanged] = useState(false);
  const [profileImage, setProfileImage] = useState<string>(
    '../profileImage.png',
  );
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || (name === user.name && email === user.email)) {
      alert('변경사항이 없습니다.');
      return;
    }

    const updates: Partial<Pick<User, 'name' | 'email'>> = {
      ...(name !== user.name && { name }),
      ...(email !== user.email && { email }),
    };

    try {
      // Zustand store update
      updateUser(user.id, { ...user, ...updates });

      // 서버에 업데이트 요청

      const updateNewUser = { ...user, ...updates };

      const response = await axios.put(
        `http://localhost:5000/users/${user.id}`,
        updateNewUser,
      );
      console.log('회원정보 수정 성공: ', response.data);

      setIsChanged(true);
    } catch (error) {
      console.error('Update failed: ', error);
    }
  };

  // 프로필사진 업데이트 로직
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 30,
              mx: 'auto',
              width: '100%',
              maxWidth: '500px',
            }}
          >
            <Typography sx={{ mb: 4 }}>프로필 정보 수정</Typography>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              label="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              fullWidth
              onClick={handleSave}
            >
              프로필 업데이트
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Index;
