import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Importe o Switch

import Header from '../components/header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import Home from '../pages/homepage';
import AboutPage from '../components/about/aboutpage';

function App() {
  const [viewCart, setViewCart] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div>
        <Header viewCart={viewCart} setViewCart={setViewCart} toggleSidebar={toggleSidebar} /> {/* Passando argumentos para Header */}
        <Sidebar isOpen={sidebarOpen} /> {/* Passando argumentos para Sidebar */}
        
          <Route path="/pages/homepage" Component={Home} />
          <Route path="/pages/aboutpage" Component={AboutPage} />
        
        <Footer viewCart={viewCart} /> {/* Passando argumentos para Footer */}
      </div>
    </Router>
  );
}

export default App;