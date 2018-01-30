import React, {Component} from 'react'
// import TreeIcon from '../../public/assets/0001_tree-pine.svg'


const TreeIcon = 'assets/0001_tree-pine.svg'

const zoomId = {1:10,2:10,3:10,4:10,5:10,6:10,7:10,8:12,9:13,10:15,11:20,12:30,13:40,14:50,15:55,16:60,17:70,18:75,19:120,20:190,21:230,22:340}

const initialized_map = {
  address: 'Alameda, CA',
  position: {
    latitude: 37.772803,
    longitude: -122.287792
  },
  zoom: 17
};

const tree_markers = [{
      icon: TreeIcon,
      position: {
        latitude: 37.774779,
        longitude: -122.289542,
      },
      label: 'Spruce'
    },
    {
      icon: TreeIcon,
      position: {
        latitude: 37.774548,
        longitude: -122.289653
      },
      label: 'Yucca'
    },
    {
      icon: TreeIcon,
      position: {
        latitude: 37.774310,
        longitude: -122.289470
      },
      label: 'Maple',
    },
    {
      icon: TreeIcon,
      position: {
        latitude: 37.773618,
        longitude: -122.286868
      },
      label: 'Pine',
    }

  ]

class GoogleMap extends Component {
  state = {
    isGeocodingError: false,
    searchAddress: initialized_map.address,
    latitude: 37.772803,
    longitude: -122.287792,
    zoom: 17
  }

  geocodeAddress = (address) => {
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      if (status === google.maps.GeocoderStatus.OK) {

        this.setState({
          searchAddress: results[0].formatted_address,
          isGeocodingError: false
        });

        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);

        return;
      }

      this.setState({
        searchAddress: null,
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

    this.tree_markers = tree_markers.map(tree => {
      // console.log('tree.position', tree.position)
        new google.maps.Marker({
          map: this.map,
          position: {
            lat: tree.position.latitude,
            lng: tree.position.longitude
          },
          icon: {
                labelOrigin: new google.maps.Point(35, 70),
                url: tree.icon,
                size: new google.maps.Size(100,100),
                scale: 100,
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(11, 40),
                scaledSize: new google.maps.Size(100,100)
          },
        })
    })

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

            {this.state.isGeocodingError ? <p className="bg-danger">Address not on earth.</p> : <p className="bg-info">{this.state.searchAddress}</p>}

            <div className="map" ref={this.setMapElementReference}></div>

          </div>
        </div>
      </div>
  )}
}

export default GoogleMap