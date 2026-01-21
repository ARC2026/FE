import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Map from "./pages/Map";
import ScrollToTop from "./hooks/ScrollToTop";
import Temp from "./pages/Temp";
import ProjectDetail from "./pages/ProjectDetail";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/map" element={<Map />} />
          <Route path="/temp" element={<Temp />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
