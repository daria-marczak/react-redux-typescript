import * as React from 'react';

// import './Header.scss';
import image from 'assets/doggo.png';
import { ReactComponent as Icon } from 'assets/checkmark.svg';

const Header: React.FC = () => (
  <header>
    <Icon />
    Header
    <img src={image} alt="" />
  </header>
);

export default Header;
