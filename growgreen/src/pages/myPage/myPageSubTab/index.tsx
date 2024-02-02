import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import React, { useState } from 'react';

interface MenuProps {
  menu: {
    id: number;
    title: string;
    to: string;
  }[];
  index: number;
}

function Tabs({ menu, index }: MenuProps) {
  const [activeTab, setActiveTab] = useState<string>(`${menu[index].to}`);
  const navigate = useNavigate();

  const handleClick = (list: string) => {
    setActiveTab(list);
    navigate(list);
  };

  return (
    <Box>
      {menu.map(item => (
        <Link
          to={item.to}
          className={item.to === activeTab ? 'active' : ''}
          onClick={() => handleClick(item.to)}
          key={item.id}
        >
          {item.title}
        </Link>
      ))}
    </Box>
  );
}

export default Tabs;
