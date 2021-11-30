import Logo from './logo/logo.component';
import Container from './container/container.component';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <Container />
    </nav>
  );
};

export default Navbar;
