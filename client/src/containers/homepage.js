import React, {Component} from 'react'
import GoogleMap from './google_map_test'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchFoo} from '../actions/index'
import Foo from './foo'
// import GoogleMap from './google_map'

class Homepage extends Component {

  state = {
    persons: [
        {id:0, name: 'cj', age:28},
        {id: 1, name: 'bild', age:58},
        {id: 2,name: 'xx', age:33}
      ],
      otherState: 'somo other value',
      showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name: newName, age:28},
        {name: 'Rose', age:58},
        {name: 'Zeek', age:33}
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({},this.state.persons[personIndex])

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons:!doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // const person = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons})

  }

  render() {
    const {lon, lat} = {lon: -122.292739, lat: 37.770659}
    const zoom = 17

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Foo
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      )
    }

    return (
      <div>
      <button onClick={this.switchNameHandler.bind(this, 'dude')}>SwitchName</button>

      <button onClick={this.togglePersonsHandler}>Toggler</button>

      {persons}

        <GoogleMap />

      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchFoo},dispatch)
}

export default connect(null,mapDispatchToProps)(Homepage)
