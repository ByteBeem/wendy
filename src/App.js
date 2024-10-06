import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> 
        <NavBar />
        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <SocialLinks />
      </div>
    </Router>
  );
}

export default App;
