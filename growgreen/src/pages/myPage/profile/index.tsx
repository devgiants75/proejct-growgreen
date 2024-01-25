import React from 'react';
import { Link } from 'react-router-dom';

// profile index
function Profile() {
  return (
    <div>
      <h2>*프로필</h2>
      <Link to="/editPersonalInfo">개인정보 수정</Link>
      <Link to="/profileSetting">프로필 수정</Link>
    </div>
  );
}

export default Profile;
