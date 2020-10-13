import React from 'react';

import './Header.scss';
import image from 'assets/doggo.png';

const Header: React.FC = () => (
  <header className="header">
    Header
    <img src={image} alt="" />
  </header>
);

export default Header;
