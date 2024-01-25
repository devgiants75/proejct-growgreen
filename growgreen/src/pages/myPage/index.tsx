import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Profile from './profile';
import Activity from './Activity';

function Index() {
  return (
    <>
      {/* 프로필 */}
      <Link to="/profilㄷ">Profile</Link>
      <br />
      {/* 활동내역 */}
      <Link to="/activity">Activity</Link>

      <Outlet />
    </>
  );
}

export default Index;
