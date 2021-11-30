import React from 'react';

import Header from '../Components/home-page/header/header.component';

import './home-page.styles.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default HomePage;
