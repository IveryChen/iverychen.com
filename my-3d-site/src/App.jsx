import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import BottomBar from "./components/BottomBar";
import Code from "./components/Code";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ProjectPage from "./components/ProjectPage";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/code" element={<Code />} />
            <Route path="/project/:projectName" element={<ProjectPage />} />
          </Routes>
        </main>
        <BottomBar />
      </Router>
    </div>
  );
};

export default App;
