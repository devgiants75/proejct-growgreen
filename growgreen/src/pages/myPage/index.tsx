import React, { useState } from 'react';
import MyPageTabs from './myPageTab/MyPageTab';

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
      마이페이지
    </div>
  );
}
