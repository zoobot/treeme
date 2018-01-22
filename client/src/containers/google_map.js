import React, {Component} from 'react'

class GoogleMap extends Component {
  componentDidMount() {
    console.log('props',this.props)
    console.log('this.refs.map',this.refs.map)

    new google.maps.Map(this.refs.map, {
      zoom:12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }


  render() {
    const mapStyle = {
      border: '3px'
    };

    return <div ref="map" />
  }
}

export default GoogleMap