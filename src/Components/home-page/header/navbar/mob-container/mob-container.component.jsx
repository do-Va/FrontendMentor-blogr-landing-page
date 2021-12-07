import Menus from '../menus/menus.component';
import Sign from '../sign/sign.component';

import './mob-container.styles.scss';

const MobContainer = ({ handleChange }) => {
  return (
    <div className="MobContainer" onMouseLeave={handleChange}>
      <Menus />
      <Sign />
    </div>
  );
};

export default MobContainer;
