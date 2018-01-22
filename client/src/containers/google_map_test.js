import React, {Component} from 'react'


const initialized_map = {
  address: 'Alameda, CA',
  position: {
    latitude: 37.772803,
    longitude: -122.287792
  },
  zoom: 17
};

class GoogleMap extends Component {
  state = {
    isGeocodingError: false,
    foundAddress: initialized_map.address,
    latitude: 37.772803,
    longitude: -122.287792,
    zoom: 17
  }

  geocodeAddress = (address) => {
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      if (status === google.maps.GeocoderStatus.OK) {

        this.setState({
          foundAddress: results[0].formatted_address,
          isGeocodingError: false
        });

        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);

        return;
      }

      this.setState({
        foundAddress: null,
        isGeocodingError: true
      });

      this.map.setCenter({
        lat: this.latitude,
        lng: this.longitude
      });

      this.marker.setPosition({
        lat: this.latitude,
        lng: this.longitude
      });

    }.bind(this));
  }

  handleFormSubmit =  (submitEvent) => {
    submitEvent.preventDefault();
    var address = this.searchInputElement.value;
    this.geocodeAddress(address);
  }

  componentDidMount = () => {
    var mapElement = this.mapElement;

    this.map = new google.maps.Map(mapElement, {
      zoom: initialized_map.zoom,
      center: {
        lat: initialized_map.position.latitude,
        lng: initialized_map.position.longitude
      }
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: initialized_map.position.latitude,
        lng: initialized_map.position.longitude
      },
      zoom: initialized_map.zoom
    });

    this.geocoder = new google.maps.Geocoder();
  }

  setSearchInputElementReference = (inputReference) => {
    this.searchInputElement = inputReference;
  }

  setMapElementReference = (mapElementReference) => {
    this.mapElement = mapElementReference;
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-sm-12">

            <form className="form-inline" onSubmit={this.handleFormSubmit}>
              <div className="row">
                <div className="col-xs-8 col-sm-10">

                  <div className="form-group">
                    <label className="sr-only" htmlFor="address">Address</label>
                    <input type="text" className="form-control input-lg" id="address" placeholder={initialized_map.address} ref={this.setSearchInputElementReference} required />
                  </div>

                </div>
                <div className="col-xs-4 col-sm-2">

                  <button type="submit" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>

                </div>
              </div>
            </form>

          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">

            {this.state.isGeocodingError ? <p className="bg-danger">Address not found.</p> : <p className="bg-info">{this.state.foundAddress}</p>}

            <div className="map" ref={this.setMapElementReference}></div>

          </div>
        </div>
      </div>
  )}
}

export default GoogleMap