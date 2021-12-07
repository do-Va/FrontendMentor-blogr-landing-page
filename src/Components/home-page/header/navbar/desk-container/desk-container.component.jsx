import Menus from '../menus/menus.component';
import Sign from '../sign/sign.component';

import './desk-container.styles.scss';

const DeskContainer = ({ showMenu }) => {
  return (
    <div className="DeskContainer">
      <Menus />
      <Sign />
    </div>
  );
};

export default DeskContainer;
