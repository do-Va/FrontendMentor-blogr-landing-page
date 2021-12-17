import './custom-image.styles.scss';

import deskEditor from '../images/illustration-editor-desktop.svg';
import mobEditor from '../images/illustration-editor-mobile.svg';

import deskLaptop from '../images/illustration-laptop-desktop.svg';
import mobLaptop from '../images/illustration-laptop-mobile.svg';

const CustomImage = ({ name, order }) => {
  const images = {
    laptop: [deskLaptop, mobLaptop],
    editor: [deskEditor, mobEditor],
  };

  return (
    <div className={`Custom-image ${order === 2 ? 'second' : ''} `}>
      <picture>
        <source media="(min-width: 1200px)" srcSet={images[name][0]} />
        <img src={images[name][1]} alt={name} />
      </picture>
    </div>
  );
};

export default CustomImage;
