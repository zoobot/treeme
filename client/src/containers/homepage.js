import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import PropTypes from 'prop-types';

import GoogleMap from './google_map_test'

// Homepage.PropTypes = {


// }

const Homepage = () => {
    const {lon, lat} = {lon: -122.292739, lat: 37.770659}
    const zoom = 17
    return (
      <div>
        <GoogleMap />
      </div>
    )
}

export default Homepage


