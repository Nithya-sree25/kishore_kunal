import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Journal from "./components/Journal";
import Conference from "./components/Conference";
import Membership from "./components/Membership";
import Awards from "./components/Awards";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Books from "./components/Books";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;