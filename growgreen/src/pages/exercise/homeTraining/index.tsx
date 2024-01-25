import React from 'react';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Tab from '../../../components/Tab/Tab';
import { exerciseLinks } from '../index';

export default function Index() {
  return (
    <>
      <SubTitle>홈트레이닝</SubTitle>
      <Tab links={exerciseLinks} index={1} />
      <div>homeTraining</div>
    </>
  );
}
