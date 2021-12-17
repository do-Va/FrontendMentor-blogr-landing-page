import React from 'react';

import Header from '../Components/home-page/header/header.component';
import Feature from '../Components/home-page/feature/feature.component';
import Footer from '../Components/home-page/footer/footer.component';

import './home-page.styles.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Home-page">
        <Header />
        <Feature />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
