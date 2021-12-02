import DropdownItem from './dropdown-item/dropdown-item.component';

import './dropdown.styles.scss';

const Dropdown = ({ dropdown, showDropdownMenu }) => {
  return (
    <ul className={`Dropdown ${showDropdownMenu ? 'show' : ''}`}>
      {dropdown.map((item, idx) => {
        return <DropdownItem key={idx} item={item} />;
      })}
    </ul>
  );
};

export default Dropdown;
