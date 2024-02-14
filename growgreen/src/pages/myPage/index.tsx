import React, { useState } from 'react';
import MyPageTabs from './myPageTab/MyPageTab';
import ProfileSetting from './profile';

export default function MyPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <ProfileSetting />
    </div>
  );
}
