import Navbar from './navbar/navbar.component';
import Hero from './hero/hero.component';

import './header.styles.scss';

const Header = () => {
  return (
    <header className="Header">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
