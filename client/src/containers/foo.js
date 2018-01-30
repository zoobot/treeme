// import 'core-js/es6/map'
// import 'core-js/es6/set'

import React, {Component} from 'react'
import {connect} from 'react-redux'

// const FooGet = (props) => {
class FooGet extends Component {


  render () {
    return (
      <div>
        <p onClick={this.props.click}>
          {this.props.name}
          and
          {this.props.age}
        </p>
        <input type="text" onChange={this.props.changed}
        value={this.props.name} />

      </div>
    )
  }
}





function mapStateToProps({ foo }) {
  return { foo }
}
export default connect(mapStateToProps)(FooGet)