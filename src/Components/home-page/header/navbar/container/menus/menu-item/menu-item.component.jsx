import Dropdown from './dropdown/dropdown.component';

import './menu-item.styles.scss';

const MenuItem = ({ name, dropdown }) => {
  return (
    <li>
      {name}
      <Dropdown dropdown={dropdown} />
    </li>
  );
};

export default MenuItem;
