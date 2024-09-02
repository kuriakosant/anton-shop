import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';  
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />  
          <Route path="contact" element= {<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
