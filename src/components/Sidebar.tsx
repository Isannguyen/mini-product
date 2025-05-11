import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Sidebar.css'; 
import Icon from '@mdi/react';
import { mdiHomeVariantOutline,mdiMenu,mdiShoppingOutline,mdiHeartOutline } from '@mdi/js';


const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [navLink,setNavLink] = useState<string>('home');

   const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const setLink=(navLink:string)=>{
      setNavLink(navLink)
  }

  return (
    <nav id="sidebar" className={isExpanded?'':'close'}>
      <ul className="title">
        <li>
          <span className="logo">AnNguyen Store</span>

          <div id="toggle-btn" onClick={toggleSidebar}>
            <Icon path={mdiMenu} size={1} color="white"></Icon>
          </div>
        </li>
      </ul>

      <ul>
        <li > 
            <NavLink 
                to="/"  
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                <Icon className="icon" path={mdiHomeVariantOutline} size={1}></Icon>
                <span>Home</span>
            </NavLink>
        </li>
      </ul>

      <ul>
        <li>
            <NavLink 
              to="/products"  
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              <Icon className="icon" path={mdiShoppingOutline} size={1}></Icon>
              <span>Product</span>
            </NavLink>
        </li>
      </ul>

       <ul>
        <li>
            <NavLink 
              to="/favorites"  
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
              >
                <Icon className="icon" path={mdiHeartOutline} size={1}></Icon>
                <span>Product Favorite</span>
            </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
