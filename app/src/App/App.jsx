import React, { Component } from 'react';
import Header from '../common/Header';
import City from '../common/City';

import current from '../store';

class App extends Component {
  state = {
    current: current
  };

  changeCity = city => {
    this.setState({
      current: city
    });
  };

  render() {
    return (
      <>
        <Header current={current} changeCity={this.changeCity} />
        <City city={this.state.current} />
      </>
    );
  }
}

export default App;
