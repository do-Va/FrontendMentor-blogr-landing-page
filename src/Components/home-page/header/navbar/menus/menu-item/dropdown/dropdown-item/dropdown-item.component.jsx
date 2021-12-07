import './dropdown-item.styles.scss';

const DropdownItem = ({ item }) => {
  return (
    <li className="Dropdown-item">
      <a href="#">{item}</a>
    </li>
  );
};

export default DropdownItem;
