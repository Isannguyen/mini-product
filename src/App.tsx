import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductFavoritePage from './pages/ProductFavoritePage';
import Sidebar from './components/Sidebar';
import '../src/css/App.css'; 
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
          <Sidebar />
          <div className="sidebar"></div>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/favorites" element={<ProductFavoritePage />} />
            </Routes>
          </div>
        </div>

    </Router>
  );
};

export default App;
