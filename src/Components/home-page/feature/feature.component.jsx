import CustomSection from '../../custom-components/custom-section/custom-section.component';
import MiddleSection from './middle-section/middle-section.component';

import './feature.styles.scss';

const Feature = () => {
  return (
    <section className="Feature">
      <h2>Designed for the future</h2>
      <CustomSection name="editor" order={1} min={1} max={2} />
      <MiddleSection />
      <CustomSection name="laptop" order={2} min={4} max={5} />
    </section>
  );
};

export default Feature;
