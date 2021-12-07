import { useState } from 'react';

import Logo from './logo/logo.component';
import MobContainer from './mob-container/mob-container.component';
import DeskContainer from './desk-container/desk-container.component';

import { ReactComponent as Hamburger } from '../images/icon-hamburger.svg';
import { ReactComponent as Close } from '../images/icon-close.svg';

import './navbar.styles.scss';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = () => {
    setShowMenu(false);
  };

  return (
    <nav className="Navbar">
      <Logo />
      <DeskContainer />
      {showMenu && (
        <MobContainer showMenu={showMenu} handleChange={handleChange} />
      )}
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
