import { combineReducers } from 'redux'
import FooReducer from './reducer_foo'

const rootReducer = combineReducers({
  foo: FooReducer
})

export default rootReducer