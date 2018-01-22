import React, {Component} from 'react'
import GoogleMap from './google_map_test'
// import GoogleMap from './google_map'

export default class Homepage extends Component {

  renderMap(cityData) {
    console.log('cityData', cityData)
  }

  render() {
    // const {lon, lat} = cityData.city.coord
    const {lon, lat} = {lon: -122.292739, lat: 37.770659}
    const zoom = 17

    // const lat = 37.770659
    // const lon = -122.292739

    console.log('homepage',lon,lat)
    return (
      <div>

        <GoogleMap />

      </div>

    )
  }
}
