import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

class SearchBar extends Component {
  state = {
    userAdmin: true,
    url: '',
    loggedIn: false,
    loaded: false,
    term: 'Alameda'
  }

  onInputChange = event => {
    console.log(event.target.value)
    this.setState({term:event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    // this.props.fetchWeather(this.state.term)
    this.setState({term:''})
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}
      className="input-group">
      <input
        placeholder="Find locations to plant trees"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
      />

      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
    </form>

    )
  }
}


// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchWeather},dispatch)
// }
// export default connect(null,mapDispatchToProps, SearchBar)
export default SearchBar
