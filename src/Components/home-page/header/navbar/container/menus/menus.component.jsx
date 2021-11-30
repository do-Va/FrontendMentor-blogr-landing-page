import MenuItem from './menu-item/menu-item.component';

import { menus } from '../../../../../../utils/constants';
import './menus.styles.scss';

const Menus = () => {
  return (
    <ul>
      {menus.map(menu => {
        return <MenuItem key={menu.id} {...menu} />;
      })}
    </ul>
  );
};

export default Menus;
