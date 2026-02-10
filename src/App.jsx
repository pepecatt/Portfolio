import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutView from "./views/About";
import ProjectsView from "./views/Projects";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutView />} />
        <Route path="/projects" element={<ProjectsView />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
