import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// 404page
import Page404 from './pages/page404';
// auth
import FindID from './pages/auth/findID';
import FindPassword from './pages/auth/findPassword';
import Join from './pages/auth/join';
import Login from './pages/auth/login';
import Logout from './pages/auth/logout';
// challenge
import Challenge from './pages/challenge';
// community
import Board from './pages/community/board';
import Entire from './pages/community/entire';
import Inquiry from './pages/community/inquiry';
// diet
import Member from './pages/diet/member';
import Recommend from './pages/diet/recommend';
// exercise
import HomeTraining from './pages/exercise/homeTraining';
import Stretch from './pages/exercise/stretch';
import PostureCorrection from './pages/exercise/postureCorrection';
// home
import Home from './pages/home';
// myPage
import CommentsWritten from './pages/myPage/commentsWritten';
import EditPersonalInfo from './pages/myPage/editPersonalInfo';
import MyPageHome from './pages/myPage/myPageHome';
import PostWritten from './pages/myPage/postWritten';
import ProfileSetting from './pages/myPage/profileSetting';
import Settings from './pages/myPage/settings';
import Exercise from './pages/exercise';
import Diet from './pages/diet';
import Community from './pages/community';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/community" element={<Community />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/*" element={<Page404 />} />
        {/* auth */}
        <Route path="/findID" element={<FindID />} />
        <Route path="/findPassword" element={<FindPassword />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* challenge */}
        <Route path="/challenge" element={<Challenge />} />
        {/* commnity */}
        <Route path="/board" element={<Board />} />
        <Route path="/entire" element={<Entire />} />
        <Route path="/inquiry" element={<Inquiry />} />
        {/* diet */}
        <Route path="/member" element={<Member />} />
        <Route path="/recommend" element={<Recommend />} />
        {/* ecercise */}
        <Route path="/homeTraining" element={<HomeTraining />} />
        <Route path="/stretch" element={<Stretch />} />
        <Route path="/postureCorrection" element={<PostureCorrection />} />
        {/* home */}
        <Route path="/home" element={<Home />} />
        {/* myPage */}
        <Route path="/commentsWritten" element={<CommentsWritten />} />
        <Route path="/editPersonalInfo" element={<EditPersonalInfo />} />
        <Route path="/myPageHome" element={<MyPageHome />} />
        <Route path="/postWritten" element={<PostWritten />} />
        <Route path="/profileSetting" element={<ProfileSetting />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
