import Menus from './menus/menus.component';
import Sign from './sign/sign.component';

import './container.styles.scss';

const Container = ({ showMenu }) => {
  return (
    <div className="Container">
      <Menus />
      <Sign />
    </div>
  );
};

export default Container;
