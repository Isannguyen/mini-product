import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductFavoritePage from './pages/ProductFavoritePage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import '../src/css/App.css'; 


const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Header />

        <div className="body">
          <Sidebar />

          <div className="content">
            <Routes>
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/favorites" element={<ProductFavoritePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
