import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useStore from '../../stores/user.store';

export default function MyPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <MyPageTabs
        selectedIndex={selectedIndex}
        handleListItemClick={handleClick}
      />
      <ProfileSetting />
    </div>
  );
}
