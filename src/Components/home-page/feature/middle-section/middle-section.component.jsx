import CustomTitle from '../../../custom-components/custom-title/custom-title.component';

import './middle-section.styles.scss';

import { features } from '../../../../utils/constants';

import circleImg from '../../../custom-components/images/bg-pattern-circles.svg';
import phoneImg from '../../../custom-components/images/illustration-phones.svg';

const MiddleSection = () => {
  return (
    <section className="Middle-section">
      <div className="phone-container">
        <img src={phoneImg} alt="phone" className="phone" />
      </div>
      <div className="Middle-section-container">
        <div className="section-container">
          <div className="image-container">
            <img src={circleImg} alt="circle" />
          </div>
          {features
            .filter(feature => feature.id >= 3 && feature.id <= 3)
            .map(feature => {
              return <CustomTitle key={feature.id} {...feature} dark="dark" />;
            })}
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
