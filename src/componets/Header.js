import React from 'react'
import { LOGO_URL } from '../utils/Constants';

const Header = () => {
    return (
        <div className="header">
          <div className="logo-container">
            <img
              src={LOGO_URL}
              alt=""
            />
          </div>
          <div className="nav-items">
            <ul className="list-items">
              <li>Home</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      );
}

export default Header