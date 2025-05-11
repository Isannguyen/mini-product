import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <li className={navLink==='home'?'active':''} onClick={()=>setLink('home')}> 
            <Link to="/">
              <Icon className="icon" path={mdiHomeVariantOutline} size={1}></Icon>
              <span>Home</span>
            </Link>
        </li>
      </ul>

      <ul>
        <li className={navLink==='product'?'active':''} onClick={()=>setLink('product')}>
            <Link to="/products">
              <Icon className="icon" path={mdiShoppingOutline} size={1}></Icon>
              <span>Product</span>
            </Link>
        </li>
      </ul>

       <ul>
        <li className={navLink==='favorite'?'active':''} onClick={()=>setLink('favorite')}>
          <div className="nav-item">
            <Link to="/favorites">
              <Icon className="icon" path={mdiHeartOutline} size={1}></Icon>
              <span>Product Favorite</span>
            </Link>
          </div> 
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
