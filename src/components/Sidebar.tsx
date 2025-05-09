import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css'; 

const Sidebar: React.FC = () => {
  return (
    <aside>
      <h2>Navigation</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Product Page</Link></li>
        <li><Link to="/favorites">Favorite Products</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
