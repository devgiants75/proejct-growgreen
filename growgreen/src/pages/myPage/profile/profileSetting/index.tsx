import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import MyPageTabs from '../../myPageTab/MyPageTab';
import { User } from '../../../../utils/types';
// eslint-disable-next-line import/no-named-as-default
import useStore from '../../../../stores/user.store';
import * as S from './Index.Style';
import Input from './Input';

// 프로필 설정
function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  const { user, updateUser } = useStore();
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isChanged, setIsChanged] = useState(false);
  const [profileImage, setProfileImage] = useState('../profileImage.png');
  const fileInput = useRef<HTMLInputElement | null>(null);

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
      // setProfileImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setProfileImage(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      );
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
          <S.BoxContainer>
            <S.InnerBox>
              <S.Title>프로필 정보 수정</S.Title>
              <S.LabelWrapper>
                <label htmlFor="profile-image-input">
                  <input
                    id="profile-image-input"
                    type="file"
                    style={{
                      display: 'none',
                    }}
                    accept="image/jpg,image/png,image/jpeg"
                    name="profileImage"
                    onChange={onChange}
                    ref={fileInput}
                  />
                  <S.AvatarWrapper>
                    <Avatar
                      src={profileImage}
                      sx={{
                        width: 160,
                        height: 160,
                        display: 'flex',
                        alignItems: 'center',
                        ml: '70rem',
                        mb: '20rem',
                      }}
                      onClick={() => {
                        if (fileInput.current) {
                          fileInput.current.click();
                        }
                      }}
                    />
                  </S.AvatarWrapper>
                  <S.Text>* 프로필을 클릭하시면 사진 수정이 가능합니다.</S.Text>
                </label>
              </S.LabelWrapper>
              <br />
              <Input
                label="이름"
                type="userName"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Input
                label="아이디"
                type="userId"
                value={userId}
                onChange={e => setUserId(e.target.value)}
              />
              <Input
                label="닉네임"
                type="nickName"
                value={nickName}
                onChange={e => setNickName(e.target.value)}
              />
              <Input
                label="비밀번호"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Input
                label="이메일"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <S.Button2 onClick={handleSave}>프로필 저장</S.Button2>
              {isChanged && <S.Message>변경사항이 저장되었습니다.</S.Message>}
            </S.InnerBox>
          </S.BoxContainer>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Index;
