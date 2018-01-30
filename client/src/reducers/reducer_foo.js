import {FETCH_FOO} from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_FOO:
    return [action.payload.data,...state]
  }
  return state

}