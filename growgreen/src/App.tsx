import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/home"
import HomeTraining from "./pages/exercise/homeTraining"
import Stretch from "./pages/exercise/stretch"
import PostureCorrection from "./pages/exercise/postureCorrection"



function App() {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/exercise" element={<HomeTraining />} />
        <Route path="/exercise" element={<Stretch />} />
        <Route path="/exercise" element={<PostureCorrection />} />
      </Routes>
  );
}

export default App;
