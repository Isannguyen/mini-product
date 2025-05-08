import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';  // Import CSS file

const Sidebar: React.FC = () => {
  return (
    <aside>
      <h2>Navigation</h2>
      <ul>
        <li><Link to="/products">Product Page</Link></li>
        <li><Link to="/products/favorites">Favorite Products</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
