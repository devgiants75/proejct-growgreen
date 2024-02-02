import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface MenuProps {
  menu: {
    id: number;
    title: string;
    to: string;
  }[];
}

function Tabs({ menu }: MenuProps) {
  const [activeTab, setActiveTab] = useState<string>(`${menu[0].id}`);
  const navigate = useNavigate();

  const handleClick = (list: string) => {
    setActiveTab(list);
    navigate(list);
  };

  return (
    <div>
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
    </div>
  );
}

export default Tabs;
