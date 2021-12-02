import { useState } from 'react';

import Logo from './logo/logo.component';
import Container from './container/container.component';

import { ReactComponent as Hamburger } from '../images/icon-hamburger.svg';
import { ReactComponent as Close } from '../images/icon-close.svg';

import './navbar.styles.scss';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="Navbar">
      <Logo />
      {showMenu && <Container showMenu={showMenu} />}
      <button onClick={() => setShowMenu(!showMenu)} className="btn">
        {!showMenu ? (
          <Hamburger className="menu-icon" />
        ) : (
          <Close className="menu-icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
