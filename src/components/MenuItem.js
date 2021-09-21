import React from 'react';
import '../css/MenuItem.css'
import { NavLink } from "react-router-dom";

const MenuItem = ({ path, title }) => {
  return (
    <div className='menuitem'>
      <NavLink to={path} className='navlink'>{title}</NavLink>
    </div>
  );
}

export default MenuItem;