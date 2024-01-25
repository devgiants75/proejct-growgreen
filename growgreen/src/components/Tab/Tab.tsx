import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import * as S from './Tab.Style';

interface IProps {
  links: {
    id: number;
    name: string;
    path: string;
  }[];
  index: number;
}

function Tabs({ links, index }: IProps) {
  const [activeTab, setActiveTab] = useState<string>(`${links[index].path}`);
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <S.Tab>
      {links.map(item => (
        <Link
          to={item.path}
          className={activeTab === item.path ? 'active' : ''}
          onClick={() => handleClick(item.path)}
        >
          {item.name}
        </Link>
      ))}
    </S.Tab>
  );
}

export default Tabs;
