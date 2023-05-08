import React, { useState } from 'react';
import { FaBars, FaReact, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles.scss';
const data = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Resume',
    to: '/resume'
  },
  {
    label: 'Skills',
    to: '/skills'
  },
  {
    label: 'Portfolio',
    to: '/portfolio'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='nav_container'>
          <Link to={'/'} className='navbar_container_logo'>
            <FaReact size={30} />
          </Link>
        </div>
        <ul className='navbar_container_menu'>
          {data.map((item, key) => (
            <li key={key} className='navbar_container_menu_item'>
              <Link className='navbar_container_menu_item_links' to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='navbar_icon' onClick={handleToggleIcon}>
          {toggleIcon ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;