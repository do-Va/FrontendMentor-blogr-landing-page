import DropdownItem from './dropdown-item/dropdown-item.component';

import './dropdown.styles.scss';

const Dropdown = ({ dropdown }) => {
  return (
    <ul>
      {dropdown.map((item, idx) => {
        return <DropdownItem key={idx} item={item} />;
      })}
    </ul>
  );
};

export default Dropdown;
