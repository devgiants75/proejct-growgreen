import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPageSubTab from '../myPageSubTab';

// profile index
function Profile() {
  return (
    <>
      {/* 프로필 수정 */}
      <MyPageSubTab to="/profileSetting" label="프로필 수정" />
      {/* 개인정보 수정 */}
      <MyPageSubTab to="/editPersonalInfo" label="개인정보 수정" />

      <Outlet />
    </>
  );
}

export default Profile;
