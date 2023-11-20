import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import First from "./component/First";
import About from "./component/About";
import Skills from "./component/Skills";
import Home from "./component/Home";
import Project from './component/Project'
import Connect from "./component/Connect";
import Footer from "./component/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/footer" element={<Footer/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
