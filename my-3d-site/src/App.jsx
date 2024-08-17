import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutPage from "./components/AboutPage.jsx";
import BottomBar from "./components/BottomBar.jsx";
import CodePage from "./components/CodePage.jsx";
import MainPage from "./components/MainPage.jsx";
import NavBar from "./components/NavBar.jsx";
import ProjectPage from "./components/ProjectPage.jsx";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="/project/:projectName" element={<ProjectPage />} />
          </Routes>
        </main>
        <BottomBar className="BottomBar" />
      </Router>

      {/* <MainPage /> */}
    </div>
  );
};

export default App;
