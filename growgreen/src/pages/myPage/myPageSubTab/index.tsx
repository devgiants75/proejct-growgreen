import React from 'react';
import { Link } from 'react-router-dom';

interface SubTabProps {
  to: string;
  label: string;
}

const myPageSubTab: React.FC<SubTabProps> = ({ to, label }) => {
  return <Link to={to}>{label}</Link>;
};

export default myPageSubTab;
