import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Journal from "./components/Journal";
import Conference from "./components/Conference";
import Certification from "./components/Certification";
import Awards from "./components/Awards";

import Contact from "./components/Contact";
import ABDC from "./pages/ABDC";
import Scopus from "./pages/Scopus";
import WebOfScience from "./pages/WebOfScience"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/awards" element={<Awards />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/abdc" element={<ABDC />} />
        <Route path="/scopus" element={<Scopus />} />
        <Route path="/web" element={<WebOfScience />} />
      </Routes>
    </Router>
  );
}

export default App;