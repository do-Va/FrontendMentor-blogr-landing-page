import Buttons from './buttons/buttons.component';
import Titles from './titles/titles.component';

import './hero.styles.scss';

const Hero = () => {
  return (
    <div className="Hero">
      <Titles />
      <Buttons />
    </div>
  );
};

export default Hero;
