import logoImg from './images/logo.svg';

import './logo.styles.scss';

const Logo = ({ footer }) => {
  return (
    <div className={`Logo ${footer ? 'footer' : ''}`}>
      <img src={logoImg} alt="logo" />
    </div>
  );
};

export default Logo;
