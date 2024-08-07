import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';
import BottomBar from './components/BottomBar';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/project/:projectName" element={<ProjectPage />} /> 
          </Routes>
          </main>
          <BottomBar className="BottomBar"/>
      </Router>
      
      {/* <MainPage /> */}
    </div>
  );
};

export default App;
