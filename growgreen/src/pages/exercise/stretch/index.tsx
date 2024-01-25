import React from 'react';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Tab from '../../../components/Tab/Tab';
import { exerciseLinks } from '../index';

export default function Index() {
  return (
    <>
      <SubTitle>스트레칭</SubTitle>
      <Tab links={exerciseLinks} index={2} />
      <div>stretch</div>
    </>
  );
}
