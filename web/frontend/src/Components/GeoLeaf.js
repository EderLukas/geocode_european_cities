import React, { Component } from 'react'
import { Map, Marker, Circle, Popup, TileLayer } from 'react-leaflet'
import axios from 'axios'

class GeoLeaf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityList: [],
      cityListError: false,
      showDefaultLocation: true
    }

    this.getCityList = this.getCityList.bind(this)
    this.sendRequest = this.sendRequest.bind(this)
    this.showDefaultLocation = this.showDefaultLocation.bind(this)
  }

  getCityList () {
    axios.get('http://localhost:4000/Controller/cityListC.php')
      .then(res => {
        if (res !== 'error'){
          this.setState({ showDefaultLocation: false, cityList: res.data })
        } else {
          this.setState({ cityListError: true })
        }
      })
  }

  sendRequest() {
    this.setState({ cityListError: false })
    this.getCityList()
  }

  showDefaultLocation() {
    this.setState({ showDefaultLocation: true })
  }

  render() {
    const default_position = [46.946664, 7.444244]
    const default_city_name = 'Bern'
    const default_country_name = 'Switzerland'
    const default_city_population = 133115
    const default_map = (
      <Map center={default_position} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
        <Marker position={default_position} >
          <Popup>
            City: {default_city_name}<br/>
            Country: {default_country_name}<br/>
            Population: {default_city_population}
          </Popup>
        </Marker>
      </Map>
    )

    const map = (
      <Map bounds={this.state.cityList.map(e => [e.city_latitude, e.city_longitude])}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          this.state.cityList.map((e) => {
            return <Marker position={[e.city_latitude, e.city_longitude]}
              key={e.city_name + '-' + e.city_latitude}>
            <Popup>
                City: {e.city_name}<br/>
                Country: {e.country_name}<br/>
                Population: {e.city_population}
            </Popup>
            <Circle center={[e.city_latitude, e.city_longitude]} radius={e.radius}
             fillColor={"blue"}/>
          </Marker>
          })
        }
      </Map>
    )

    return <div className='buttons_and_map'>
      <button onClick={this.sendRequest}>Show cities</button>
      <button onClick={this.showDefaultLocation}>Show default location</button>
      {
        this.state.cityListError ? 
          <div className="request_error">
            <p>'Request failed. Please try again.'</p>
          </div> :
          <div className='leaflet_map'>
            { this.state.showDefaultLocation ? default_map : map }
          </div>
      }
    </div>
  }
}

export default GeoLeaf