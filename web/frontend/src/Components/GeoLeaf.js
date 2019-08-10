import React, { Component } from 'react'
import { Map, Marker, Circle, Popup, TileLayer } from 'react-leaflet'
import axios from 'axios'

class GeoLeaf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityList: [],
      cityListError: false,
      defaultLocation: [46.946664, 7.444244],
      isDefaultlocation: true
    }

    this.getCityList = this.getCityList.bind(this)
    this.sendRequest = this.sendRequest.bind(this)
  }

  getCityList () {
    axios.get('http://localhost:4000/Controller/cityListC.php')
      .then(res => {
        if (res !== 'error'){
          this.setState({ cityList: res.data })
        } else {
          this.setState({ cityListError: true })
        }
      })
  }

  sendRequest() {
    this.setState({ cityListError: false })
    this.getCityList()
  }

  render() {
    const map = (
      // fitBounds={this.state.locations.map(e => [e.x_position, e.y_position])}
      <Map center={this.state.defaultLocation}
       zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={this.state.isDefaultlocation ? this.state.defaultLocation : null}>
          <Popup>
              City: x<br/>
              Country: y<br/>
              Population: 42
          </Popup>
          <Circle center={[47.424422, 8.304614]} radius={200} fillColor={"blue"}/>
        </Marker>
      </Map>
    )
    return <div className='buttons_and_map'>
      <button onClick={this.sendRequest}>Show cities</button>
      <button onClick={this.setDefaultLocation}>Set default location</button>
      {
        this.state.cityListError ? 
          <div className="request_error">
            <p>'Request failed. Please try again.'</p>
          </div> :
          <div className='leaflet_map'>
            { map }
          </div>
      }
    </div>
  }
}

export default GeoLeaf