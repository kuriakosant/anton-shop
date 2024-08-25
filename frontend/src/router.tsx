import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';  // Import the About page
import Header from './components/Header';
import Footer from './components/Footer';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />  {/* Route to About Page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
