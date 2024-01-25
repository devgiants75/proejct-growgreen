import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// myPage

const myPage: React.FC = () => {
  return (
    <div>
      <div>
        <Link to="./profile">profile</Link>
        <Link to="./activity">activity</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default myPage;
