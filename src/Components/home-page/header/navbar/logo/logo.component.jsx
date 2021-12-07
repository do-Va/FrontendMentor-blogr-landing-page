import logoImg from './images/logo.svg';

import './logo.styles.scss';

const Logo = () => {
  return (
    <div className="Logo">
      <img src={logoImg} alt="logo" />
    </div>
  );
};

export default Logo;
