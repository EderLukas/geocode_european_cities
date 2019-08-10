import React, { Component, Fragment } from 'react';
import Header from './Components/pageUtil/Header'
import Geocoding from './Components/Geocoding'
import Footer from './Components/pageUtil/Footer'

class App extends Component {
  render() {
    return <Fragment>
      <Header />
      <Geocoding />
      <Footer />
    </Fragment>
  }
}

export default App;
