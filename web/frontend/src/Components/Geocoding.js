import React, { Component } from 'react'
import GeoLeaf from './GeoLeaf';

class Geocoding extends Component {
  render() {
    return <div className='main_content'>
      <div className='introduction_text'>
        <p>This Web-Application is displaying the location european cities.<br />
          The size of the dots also indicates the size of the population in relation to the other cities. Further information about the city in the popups.
        </p>
      </div>
      <GeoLeaf />
    </div>
  }
}

export default Geocoding