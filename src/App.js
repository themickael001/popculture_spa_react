import React, { Component } from 'react';

import Header from './components/Header';
import Slider from './components/Slider';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
